<template>
    <div class="modal-table">
        <ElButton type="primary" size="small" @click="openModal" destroy-on-close>{{ text }}</ElButton>
        <ElDialog :title="title" v-model="visible">
            <SearchPanel :data="columns" @search="search" />
            <DataTable
                @pageChange="pageChange"
                @dbclick="handDbClick"
                :columns="columns"
                :data="tableData"
                :pagination="pagination"
            />
        </ElDialog>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, watchEffect, watch } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import SearchPanel from '@/components/SearchPanel.vue'
import DataTable from '@/components/ListTableTsx.vue'

interface ModalTableProps {
    modelValue: string
    title: string
    columns: ListColumnsType[]
    api: ApiMethods
    valueConfig: ModalTableValueConfig
}
const props = withDefaults(defineProps<ModalTableProps>(), {})
const emit = defineEmits(['update:modelValue', 'select'])

const Api = props.api
const visible = ref(false)
const text = ref(`请选择${props.title}`)
// 存储上次选中的value值
let oldModelValue=''
// 有值则显示名称字段
watchEffect(() => {
    if (props.modelValue&&props.modelValue!==oldModelValue) {
        Api.getById({ _id: props.modelValue })
            .then((res: any) => {
                text.value = res.data[props.valueConfig.nameFiled]
            })
    }
})

const tableData = ref([])
const pagination = ref<PaginationType>({
    currentPage: 1,
    pageSize: 10,
    total: 10
})
const searchObj = ref({})
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
const search = (searchInfo: {}) => {
    searchObj.value = searchInfo
    getList()
}
const pageChange = (pg: PaginationType) => {
    pagination.value = pg
    getList()
}
const openModal = () => {
    visible.value = true
}
const handDbClick = (row: any) => {
    emit('update:modelValue', row[props.valueConfig.valueFiled])
    oldModelValue=row[props.valueConfig.valueFiled]
    text.value = row[props.valueConfig.nameFiled]
    emit('select', row)
    visible.value = false
}
onMounted(() => {
    getList()
})
</script>


<style lang='scss'>
.modal-table {
    display: inline-block;
    .el-dialog__body {
        padding: 15px;
        .search {
            padding: 0;
            .search-button {
                .right {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>
