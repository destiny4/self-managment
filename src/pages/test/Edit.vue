<template>
    <container>
        <div>
            <div class='title'>基本配置</div>
            <el-form
                class="single-main"
                :model="ruleForm"
                :rules="rules"
                ref="FormInstance"
                label-width="100px"
            >
                <el-form-item v-bind='obj'>
                    <el-input v-bind='obj' v-model="ruleForm[obj.prop]"></el-input>
                </el-form-item>
                <el-form-item size="small" label="活动名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item size="small" label="活动区域" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动日期" required size="small" prop="date1">
                    <el-date-picker
                        type="datetime"
                        :shortcuts="shortcuts"
                        placeholder="选择日期"
                        v-model="ruleForm.date1"
                        style="width: 100%;"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="活动时间" required size="small" prop="date2">
                    <el-time-picker
                        placeholder="选择时间"
                        v-model="ruleForm.date2"
                        style="width: 100%;"
                    ></el-time-picker>
                </el-form-item>
                <el-form-item size="small" label="活动形式" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item size="small">
                    <el-button  type="primary" @click="submitForm()">立即创建</el-button>
                    <el-button  @click="resetForm()">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </container>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type { PropType } from 'vue'
import { ElForm, ElFormItem, ElInput, ElCol, ElTimePicker, ElButton, ElSelect, ElOption, ElDatePicker } from 'element-plus'
import Container from '@/components/layout/container.vue'
const shortcuts = [{
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
const ruleForm = reactive<any|string>({
    name: '',
    region: '',
    date1: '',
    date2: '',
    test:'',
    desc: ''
})
const rules = {
    name: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    region: [
        { required: true, message: '请选择活动区域', trigger: 'change' }
    ],
    date1: [
        { required: true, message: '请选择日期', trigger: 'change' }
    ],
    date2: [
        { required: true, message: '请选择时间', trigger: 'change' }
    ],
    desc: [
        { required: true, message: '请填写活动形式', trigger: 'blur' }
    ]
}
const submitForm = () => {
    console.log(ruleForm)
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
const obj={
    size:'small',
    label:'ceshi',
    prop:'test',
    required:true,
}
</script>

<style scoped lang='scss'>
.title{
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