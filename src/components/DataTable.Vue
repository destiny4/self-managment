
<template>
    <el-table class="table-margin" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="150"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="province" label="省份" width="120"></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="600"></el-table-column>
        <el-table-column prop="zip" label="邮编"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
            <template #default="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
        class="pagination-region"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pg.currentPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pg.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
    ></el-pagination>
</template>
    
<script setup lang='ts'>
import { ref,reactive } from 'vue'
import type { PropType } from "vue"

const props = defineProps({
    data:{
        type:Array,
        default:[]
    },
    pagination:{
        type:Object as PropType<PaginationType>
    }
})
const tableData = ref([{
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
}])

const pg=reactive<PaginationType>(props.pagination)

const currentPage = ref(4)
const pageSize=ref(10)

const emit = defineEmits(['search'])

const handleClick = (row) => {
    console.log(row);
}

const handleSizeChange = (val) => {
    pg.pageSize=val
};
const handleCurrentChange = (val) => {
    pg.currentPage=val
};
</script>
    
<style scoped lang='scss'>
.pagination-region {
    margin-top: 10px;
    display:flex;
    justify-content: flex-end;
}
</style>
    