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
                    <el-button @click="resetForm()">重置</el-button>
                </ElFormItem>
            </ElForm>
        </main>
    </container>
</template>

<script lang='ts'>
import { ElForm, ElFormItem, ElInput, ElCol, ElTimePicker, ElButton, ElSelect, ElOption, ElDatePicker } from 'element-plus'
export default {
    components: { ElForm, ElFormItem, ElInput, ElCol, ElTimePicker, ElButton, ElSelect, ElOption, ElDatePicker }
}
</script>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type { PropType } from 'vue'
import Container from '@/components/layout/container.vue'
import type { FormRulesMap } from 'element-plus/lib/el-form/src/form.type'
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
const formFileds = reactive<Record<string, string>>({
    name: '',
    region: '',
    date1: '',
    date2: '',
    test: '',
    desc: ''
})
const formItems: EditFormItem[] = [
    {
        xtype: 'ElInput',
        outer: {
            size: 'small',
            label: '测试',
            prop: 'test'
        },
        events: {
            change: (val: any) => {
                console.log('change', val)
            },
            focus: () => {
                console.log('focus')
            }
        }
    },
    {
        xtype: 'ElInput',
        outer: {
            size: 'small',
            label: '活动名称',
            prop: 'name'
        }
    },
    {
        xtype: 'ElSelect',
        outer: {
            size: 'small',
            label: '活动区域',
            prop: 'region'
        },
        inner: {
            placeholder: '请选择活动区域',
            options: [{
                label: '区域1',
                value: 'shanghai'
            }, {
                label: '区域2',
                value: 'chongqing'
            }]
        }
    },
    {
        xtype: 'ElDatePicker',
        outer: {
            size: 'small',
            label: '活动日期',
            prop: 'date1'
        },
        inner: {
            type: 'datetime',
            shortcuts,
            placeholder: '请选择日期',
            style: 'width:100%'
        }
    },
    {
        xtype: 'ElTimePicker',
        outer: {
            size: 'small',
            label: '活动时间',
            prop: 'date2'
        },
        inner: {
            style: 'width:100%'
        }
    },
    {
        xtype: 'ElInput',
        outer: {
            size: 'small',
            label: '活动形式',
            prop: 'desc'
        },
        inner: {
            type: 'textarea'
        }
    },
]
const obj: EditFormItem = {
    xtype: 'ElInput',
    outer: {
        size: 'small',
        label: 'ceshi',
        prop: 'test'
    },
    events: {
        change: (val: any) => {
            console.log('change', val)
        },
        focus: () => {
            console.log('focus')
        }
    }
}
const rules: FormRulesMap = {
    test: [{
        required: true, validator: (rule, value, callback) => {
            callback()
            return true
        }, trigger: 'blur'
    }],
    name: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    region: [
        { required: true, message: '请选择活动区域', trigger: 'change' }
    ],
    date1: [
        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
    ],
    date2: [
        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
    ],
    desc: [
        { required: true, message: '请填写活动形式', trigger: 'blur' }
    ]
}
const submitForm = () => {
    FormInstance.value?.validate((valid: any) => {
        if (valid) {
            alert('submit!');
        } else {
            console.log('error submit!!');
            return false;
        }
    })
}
const resetForm = () => {
    FormInstance.value?.resetFields()
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