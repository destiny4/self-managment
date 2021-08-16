<template>
    <div class="main-container">
        <SearchPanel :handCreate="handCreate" :data="columns" @search="getList" />
        <div class="table-region">
            <DataTable
                @pageChange="pageChang"
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
import carsApi from '@/apis/cars'

const router = useRouter()
const store = useStore()

const handCreate = () => {
    router.push('/cars/edit/0')
}

const handleDelete = (row: any) => {
    ElMessageBox.confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    })
        .then(() => {
            carsApi.deleteById({ _id: row._id }).then((res: any) => {
                if (res.code === 0) {
                    ElMessage.success('删除成功');
                    getList({})
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
const columns: ListColumnsType[] = [{
    name: '名称',
    id: 'title',
    inSearch: true
}, {
    name: '品牌',
    id: 'brand',
    inSearch: true
}, {
    name: '价格',
    id: 'price'
}, {
    name: '年龄',
    id: 'age',
    align: 'center'
}, {
    name: '操作',
    id: 'action',
    fixed: "right",
    slots: {
        default: ({ row }: any) => {
            return (<>
                <ElButton onClick={(e: any) => router.push(`/cars/edit/${row._id || 0}`)} type="text" size="small">编辑</ElButton>
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
const getList = (searchInfo: {}) => {
    carsApi.getByPage({
        pageSize: pagination.value.pageSize,
        currentPage: pagination.value.currentPage,
        query: { ...searchInfo }
    }).then((res: any) => {
        tableData.value = res.data.list
        pagination.value = res.data.pagination

    })
}
const handleClick = (row: any) => {
    console.log(row)
}
const pageChang = (pg: PaginationType) => {
    console.log(pg)
}
onMounted(() => {
    getList({})
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
