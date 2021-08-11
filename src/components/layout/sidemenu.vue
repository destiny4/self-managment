
<template>
    <div class="self-menu">
        <el-menu class="menu-main" :collapse="collapse" :router='true' :default-active='route.path'>
            <MenuItem :menu='item' v-for='item in menu'/>
        </el-menu>
        <div class="collapse-icon">
            <i @click="collapse = !collapse" class="el-icon-s-unfold" v-if="collapse"></i>
            <i @click="collapse = !collapse" class="el-icon-s-fold" v-else></i>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue'
import MenuItem from './MenuItem.vue'
import type { PropType } from "vue"
import {ElMenu} from 'element-plus'
import { useRoute } from 'vue-router'

const route=useRoute()
defineProps({
    menu: {
        type: Array as PropType<MenuItemType[]>,
        default: []
    },
    collapse: {
        type: Boolean,
        default: true
    }
})
</script>

<style scoped lang='scss'>
.self-menu {
    display: flex;
    flex-direction: column;
    .collapse-icon {
        align-self: flex-end;
        border-right: solid 1px var(--el-menu-border-color);
        font-size: 25px;
        padding-right: 20px;
    }
}
.menu-main {
    height: 100%;
    &:not(.el-menu--collapse) {
        width: 232px;
    }
}
</style>