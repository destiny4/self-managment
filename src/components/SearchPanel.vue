<template>
    <div class="search">
        <div class="search-input">
            <template v-for="item in searchFileds" :key="item.id">
                <div v-if='item.inSearch' class="item">
                    <label :style="getStyle(item)">{{ item.name }}：</label>
                    <el-input
                        size="small"
                        class="input"
                        v-model="searchInfo[item.id]"
                        :placeholder="getPlaceHolder(item)"
                    />
                </div>
            </template>
        </div>
        <div class="search-button">
            <div class="left">
                <el-button size="small" :style='newButtonStyle' class="marginRight" type="primary" @click="handCreate">新建</el-button>
            </div>
            <div class="right">
                <el-button size="small" class="marginLeft" @click="handleClear">清空</el-button>
                <el-button size="small" class="marginLeft" type="primary" @click="handleSearch">检索</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive,computed } from 'vue'
import {ElInput,ElButton} from 'element-plus'
import type { PropType } from "vue"
interface searchFiledType {
    name: string
    id: string
    inSearch?:boolean
    labelWidth?: string
    placeHolder?: string
    [propName: string]: any;
}
const props = defineProps({
    data: {
        type: Array as PropType<searchFiledType[]>,
        default: []
    },
    handCreate:{
        type:Function as PropType<(e?:MouseEvent)=>void>,
        default:null
    }
})
const newButtonStyle=computed(()=>{
    return props.handCreate===null?{
        display:'none'
    }:{}
})
const searchFileds = ref<searchFiledType[]>(props.data)
const tmp: any = {}
searchFileds.value.forEach(item => {
    tmp[item.id] = ''
})
const searchInfo = reactive(tmp)

const getStyle = (item: searchFiledType) => {
    return `width:${item.labelWidth || 100}px`
}

const getPlaceHolder = (item: searchFiledType) => {
    return item.placeHolder ? item.placeHolder : `请输入${item.name}...`
}

const emit = defineEmits(['search'])

const handleClear = () => {
    Object.keys(searchInfo).forEach(key => {
        searchInfo[key]=''
    })
 }

const handleSearch = () => {
    const obj: any = {}
    Object.keys(searchInfo).forEach(key => {
        if (searchInfo[key]) {
            obj[key] = searchInfo[key]
        }
    })
    emit('search', obj)
}

</script>

<style lang="scss" scoped>
.search {
    background: #ffffff;
    border-radius: 4px;
    padding: 24px 0;
    .search-input {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .item {
            display: flex;
            margin-left: 30px;
            margin-bottom: 12px;
            align-items: center;
            flex-basis: 350px;
            label {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #262626;
                letter-spacing: 0;
            }
        }
    }
    .search-button {
        margin-top: 18px;
        display: flex;
        justify-content: space-between;
        .left {
            margin-left: 30px;
            display: flex;
            justify-content: flex-start;
            .marginRight {
                margin-right: 15px;
            }
        }
        .right {
            margin-right: 30px;
            display: flex;
            justify-content: flex-end;
            .marginLeft {
                margin-left: 15px;
            }
        }
    }
}
.main {
    margin: 25px;
    .action {
        display: flex;
        justify-content: space-around;
    }
    .page {
        margin-top: 30px;
        float: right;
    }
}
</style>
