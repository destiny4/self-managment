<template>
    <div class="main-container">
        <SearchPanel :data="columns" @search='getList' />
        <div  class='table-region'>
            <DataTable :pagination='pagination'/>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type { PropType } from "vue"
import SearchPanel from '@/components/SearchPanel.vue'
import DataTable from '@/components/DataTable.vue'
const columns = [{
    name: '路由单元',
    id: 'routeName',
    labelWidth: '100',
    placeHolder: '请输入路由'
}, {
    name: '前台路径',
    id: 'url',
    labelWidth: '100'
}, {
    name: '频率限制',
    id: 'limit',
    labelWidth: '100'
}]
const pagination:PaginationType={
    currentPage:1,
    pageSize:10
}
const getList = (searchInfo:any)=>{
    console.log(searchInfo)
}
</script>

<style lang="scss" scoped>
.main-container {
    .table-region{
        margin-top:20px;
        background: #FFFFFF;
        padding:10px 20px;
    }
}
</style>
