<template>
    <container>
        <main>
            <p class="title">基本配置</p>
            <ElForm
                class="single-main"
                :model="formFileds"
                :rules="rules"
                ref="FormInstance"
                label-width="100px"
            >
                <ElFormItem
                    :key="item.outer.prop + new Date()"
                    v-bind="item.outer"
                    v-for="item in formItems"
                >
                    <component
                        :is="item.xtype"
                        v-model="formFileds[item.outer.prop]"
                        v-on="item.events || {}"
                        v-bind="item.inner || {}"
                    >
                        <template v-if="item.xtype === 'ElSelect'">
                            <ElOption v-for="option in item.inner?.options" v-bind="option"></ElOption>
                        </template>
                    </component>
                </ElFormItem>

                <ElFormItem size="small">
                    <el-button type="primary" @click="submitForm()">立即创建</el-button>
                    <el-button @click="back()">返回</el-button>
                </ElFormItem>
            </ElForm>
        </main>
    </container>
</template>

<script lang='ts'>
import { ElForm, ElFormItem, ElInput, ElTimePicker, ElButton, ElSelect, ElOption, ElDatePicker } from 'element-plus'
export default {
    components: { ElForm, ElFormItem, ElInput, ElTimePicker, ElButton, ElSelect, ElOption, ElDatePicker }
}
</script>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import type { PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Container from '@/components/layout/container.vue'
import { ElMessage } from 'element-plus'
import type { FormRulesMap } from 'element-plus/lib/el-form/src/form.type'
import carsApi from '@/apis/cars'

const router = useRouter()
const shortcuts: DateTimeShortcut[] = [{
    text: '今天',
    value: new Date(),
}, {
    text: '昨天',
    value: () => {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        return date
    },
}, {
    text: '一周前',
    value: () => {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        return date
    },
}]
const FormInstance = ref<any>(null)
const formFileds = ref<Record<string, string>>({
    title: '',
    brand: '',
    price: '',
    age: '',
    _id: ''
})
const formItems: EditFormItem[] = [
    {
        xtype: 'ElInput',
        outer: {
            size: 'small',
            label: '_id',
            style: 'display: none',
            prop: '_id'
        }
    },
    {
        xtype: 'ElInput',
        outer: {
            size: 'small',
            label: '名称',
            prop: 'title'
        }
    },
    {
        xtype: 'ElInput',
        outer: {
            size: 'small',
            label: '品牌',
            prop: 'brand'
        }
    },
    {
        xtype: 'ElInput',
        outer: {
            size: 'small',
            label: '价格',
            prop: 'price'
        }
    },
    {
        xtype: 'ElInput',
        outer: {
            size: 'small',
            label: '出厂年限',
            prop: 'age'
        }
    },
]
const rules: FormRulesMap = {
    title: [
        { required: true, trigger: 'change' }
    ],
    age: [
        { required: true, trigger: 'change' }
    ],
}
let addFlg = true

onMounted(() => {
    const route = useRoute()
    addFlg = route.params.id === '0' ? true : false
    if (!addFlg) {
        carsApi.getById({ _id: route.params.id })
            .then((res: any) => {
                formFileds.value = res.data
            })
    }
})
const submitForm = () => {
    FormInstance.value?.validate((valid: any) => {
        if (valid) {
            if (addFlg) {
                carsApi.insert(formFileds.value).then((res: any) => {
                    if (res.code === 0) {
                        ElMessage.success('新增成功');
                    }else{
                        ElMessage.error(res.msg);
                    }
                }).catch((err: any)=>{
                    ElMessage.error(err);
                })
            } else {
                carsApi.updateById(formFileds.value).then((res: any) => {
                    if (res.code === 0) {
                        ElMessage.success('修改成功');
                    }else{
                        ElMessage.error(res.msg);
                    }
                }).catch((err: any)=>{
                    ElMessage.error(err);
                })
            }
        } else {
            ElMessage.error('请查看输入');
            return false;
        }
    })
}
const resetForm = () => {
    FormInstance.value?.resetFields()
}
const back = () => {
    router.back()
}
</script>

<style scoped lang='scss'>
.title {
    font-weight: bold;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 24px;
}
.single-main {
    width: 476px;
    padding-right: 100px;
}
</style>