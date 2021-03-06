<template>
    <div class="main-container">
        <SearchPanel :handCreate="handCreate" :data="columns" @search="search" />
        <div class="table-region">
            <DataTable
                @pageChange="pageChange"
                :columns="columns"
                :data="tableData"
                :pagination="pagination"
            />
        </div>
    </div>
</template>

<script setup lang='tsx'>
import { ref, reactive, onMounted } from 'vue'
import type { PropType } from "vue"
import { useRouter } from 'vue-router'
import SearchPanel from '@/components/SearchPanel.vue'
import DataTable from '@/components/ListTableTsx.vue'
import { ElButton, ElMessage, ElMessageBox } from 'element-plus'
import { useStore } from 'vuex'
import Api from '@/apis/<%= data.moduleId %>'

const router = useRouter()
const store = useStore()

const handCreate = () => {
    router.push('/<%= data.moduleId %>/edit/0')
}

const handleDelete = (row: any) => {
    ElMessageBox.confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    })
        .then(() => {
            Api.deleteById({ _id: row._id }).then((res: any) => {
                if (res.code === 0) {
                    ElMessage.success('删除成功');
                    getList()
                } else {
                    ElMessage.error(res.msg);
                }
            }).catch((err: any) => {
                ElMessage.error(err);
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '已取消删除',
            });
        });
}
const columns: ListColumnsType[] = [
<% data.table.forEach(function(item){ -%>
{
    name: '<%= item.name %>',
    id: '<%= item.id %>',
    <% if(item.type==='date'){ -%>
    searchConfig:{
        xtype:'ElDatePicker',
        type:'daterange',
        'range-separator':'至',
        'start-placeholder':'开始日期',
        'end-placeholder':'结束日期'
    },
    <% } -%> 
    inSearch: true
}, 
    <% }); -%>
 {
    name: '操作',
    id: 'action',
    fixed: "right",
    slots: {
        default: ({ row }: any) => {
            return (<>
                <ElButton onClick={(e: any) => router.push(`/<%= data.moduleId %>/edit/${row._id || 0}`)} type="text" size="small">编辑</ElButton>
                <ElButton onClick={((e: any) => handleDelete(row))} type="text" size="small">删除</ElButton>
            </>)
        }
    }
}
]
const tableData = ref([])
const pagination = ref<PaginationType>({
    currentPage: 1,
    pageSize: 10,
    total: 10
})
const searchObj=ref({})
const getList = () => {
    Api.getByPage({
        pageSize: pagination.value.pageSize,
        currentPage: pagination.value.currentPage,
        query: { ...searchObj.value }
    }).then((res: any) => {
        tableData.value = res.data.list
        pagination.value = res.data.pagination

    })
}
const search=(searchInfo: any) => {
    <% data.table.forEach(function(item){ -%>
        <% if(item.type==='date'){ -%>
            if(searchInfo.<%= item.id %>){
                searchInfo.<%= item.id %>={
                    '$gte':searchInfo.<%= item.id %>[0].getTime(),
                    '$lte':searchInfo.<%= item.id %>[1].getTime()
                }
            }
        <% } -%>
    <% }); -%>
    searchObj.value=searchInfo
    getList()
}
const pageChange = (pg: PaginationType) => {
    pagination.value=pg
    getList()
}
onMounted(() => {
    getList()
})

</script>

<style lang="scss" scoped>
.main-container {
    .table-region {
        margin-top: 20px;
        background: #ffffff;
        padding: 10px 20px;
    }
}
</style>
