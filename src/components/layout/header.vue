<template>
    <header class="total-header">
        <div class="left">
            <i class="el-icon-star-off"></i>
            <slot name="left">
                <span>后台管理系统</span>
            </slot>
        </div>
        <div class="right">
            <slot name="right">
                <el-image style="width: 32px; height: 32px" :src="url" :fit="fit"></el-image>
                <el-dropdown trigger='click'>
                    <span class="el-dropdown-link">
                        admin
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item icon="el-icon-plus">注销</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-plus">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </slot>
        </div>
    </header>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import {ElImage,ElDropdown } from 'element-plus'
const fit = ref('fill')
const url = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
</script>

<style scoped lang='scss'>
$height: 100%;
.total-header {
    padding: 0 20px;
}
.left {
    display: flex;
    float: left;
    align-items: center;
    height: $height;
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    line-height: 20px;
    color: #ffffff;
    letter-spacing: 0;
    span {
        margin-left: 5px;
    }
}
.right {
    float: right;
    height: $height;
    display: flex;
    align-items: center;
    span {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0;
        margin-left: 5px;
    }
}
</style>