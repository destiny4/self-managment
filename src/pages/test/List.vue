<template>
    <div class="main-container">
        <SearchPanel :data="columns" @search="getList" />
        <div class="table-region">
            <DataTable :columns="columns" :data="tableData" :pagination="pagination">
                <el-table-column fixed="right" label="操作" width="100">
                    <template #default="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </DataTable>
        </div>
    </div>
</template>

<script setup lang='tsx'>
import { ref, reactive } from 'vue'
import type { PropType } from "vue"
import SearchPanel from '@/components/SearchPanel.vue'
import DataTable from '@/components/DataTable.vue'
const columns: ListColumnsType[] = [{
    name: '日期',
    id: 'date',
    align: 'center',
    width: 150
}, {
    name: '姓名',
    id: 'name',
    inSearch: true,
    width: 150
}, {
    name: '省份',
    id: 'province',
    width: 120
}, {
    name: '市区',
    id: 'city',
    width: 120
}, {
    name: '地址',
    id: 'address',
    width: 500,
    align: 'center'
}, {
    name: '邮编',
    id: 'zip',
    inSearch: true
}
]
const tableData = [{
    date: '2016-05-02',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
}, {
    date: '2016-05-04',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1517 弄',
    zip: 200333
}, {
    date: '2016-05-01',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1519 弄',
    zip: 200333
}, {
    date: '2016-05-03',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1516 弄',
    zip: 200333
}]
const pagination: PaginationType = {
    currentPage: 1,
    pageSize: 10
}
const getList = (searchInfo: any) => {
    console.log(searchInfo)
}
const handleClick = (row: any) => {
    console.log(row)
}
const fun = () => {
    return (
        <el-table-column fixed="right" label="操作" width="100">
   
                </el-table-column>
    )
}
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
