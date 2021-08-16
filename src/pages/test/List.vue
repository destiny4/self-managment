<template>
    <div class="main-container">
        <SearchPanel :data="columns" @search="getList" />
        <div class="table-region">
            <DataTable @pageChange='pageChang' :columns="columns" :data="tableData" :pagination="pagination" />
        </div>
    </div>
</template>

<script setup lang='tsx'>
import { ref, reactive, onMounted } from 'vue'
import type { PropType } from "vue"
import SearchPanel from '@/components/SearchPanel.vue'
import DataTable from '@/components/ListTableTsx.vue'
import { ElButton } from 'element-plus'
import { router } from '@/router'
import { useStore } from 'vuex'
import testApi from '@/apis/test'

const store = useStore()

const handleDelete = () => {
    store.commit('setTest', '456')
    store.commit('login/setName', 'cxl')
}
const columns: ListColumnsType[] = [{
    name: '名称',
    id: 'title',
    inSearch: true
},{
    name: '品牌',
    id: 'brand',
    inSearch: true
},  {
    name: '价格',
    id: 'price'
}, {
    name: '年龄',
    id: 'age',
    align: 'center'
},{
    name: '操作',
    id: 'action',
    fixed: "right",
    slots: {
        default: ({ row }: any) => {
            return (<>
                <ElButton onClick={(e: any) => router.push(`/people/edit/${row._id||0}`)} type="text" size="small">编辑</ElButton>
                <ElButton onClick={((e: any) => handleDelete())} type="text" size="small">删除</ElButton>
            </>)
        }
    }
}
]
const tableData = ref([])
const pagination = ref<PaginationType>({
    currentPage: 1,
    pageSize: 10,
    total:10
})
const getList = (searchInfo: {}) => {
    testApi.getByPage({
        pageSize: pagination.value.pageSize,
        currentPage: pagination.value.currentPage,
        query:{ ...searchInfo}
    }).then((res: any)=>{
        tableData.value=res.data.list
        pagination.value=res.data.pagination

    })
}
const handleClick = (row: any) => {
    console.log(row)
}
const pageChang=(pg:PaginationType)=>{
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
