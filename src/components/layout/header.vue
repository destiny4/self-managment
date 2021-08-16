<template>
    <header class="total-header">
        <div class="left">
            <svg-icon name='management'></svg-icon>
            <slot name="left">
                <span>后台管理系统</span>
            </slot>
        </div>
        <div class="right">
            <slot name="right">
                <svg-icon width='25' height='25' :name="store.state.login?.avator||'people'"></svg-icon>
                <el-dropdown trigger='click'>
                    <span class="el-dropdown-link">
                        {{store.state.login.name}}{{store.state.test}}
                        <svg-icon width='16' height='16' name="downarrow"></svg-icon>
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
import {ElImage,ElDropdown, ElDropdownMenu,ElDropdownItem} from 'element-plus'
import {useStore} from 'vuex'
const store=useStore()

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
        margin-left: 10px;
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
        margin-left: 10px;
    }
}
</style>