
<template>
    <el-table class="table-margin" :data="tableData" style="width: 100%">
        <el-table-column
            v-for="item in tableColumns"
            :key="item.id"
            :prop="item.id"
            :label="item.name"
            :width="item.width || '-'"
            :align="item.align || 'left'"
        ></el-table-column>
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
import { ref, reactive } from 'vue'
import type { PropType } from "vue"
import {ElTableColumn,ElTable,ElPagination} from 'element-plus'
const props = defineProps({
    data: {
        type: Array,
        default: []
    },
    pagination: {
        type: Object as PropType<PaginationType>
    },
    columns: {
        type: Array as PropType<ListColumnsType>
    }
})
const tableData = ref(props.data)
const tableColumns = ref(props.columns)

const pg = reactive<PaginationType>(props.pagination)

const currentPage = ref(4)
const pageSize = ref(10)

const handleClick = (row) => {
    console.log(row);
}

const handleSizeChange = (val) => {
    pg.pageSize = val
};
const handleCurrentChange = (val) => {
    pg.currentPage = val
};
</script>
    
<style scoped lang='scss'>
.pagination-region {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
}
</style>
    