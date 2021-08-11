
<template>
    <component v-if='!menu.hiddenInMenu' :is="itemComponent" :index="menu.path" :key="menu.path">
        <i :class="menu.icon" v-if="menu.icon && !hasChildren"></i>
        <template #title v-if="!hasChildren">{{ menu.name }}</template>
        <template #title v-if="hasChildren">
            <i :class="menu.icon" v-if="menu.icon"></i>
            <span>{{ menu.name }}</span>
        </template>
        <!-- 有子节点递归生成菜单项 -->
        <MenuItem :menu="child" :key="child.name" v-for="child in menu.children" v-if="hasChildren"></MenuItem>
    </component>
</template>
<script lang='ts'>
import {ElSubmenu,ElMenuItem} from 'element-plus'
export default {
    components: {
        ElSubmenu,ElMenuItem
    }
}
</script>
<script setup lang='ts'>
import { computed, ref } from 'vue'
import type { PropType } from "vue"
const props = defineProps({
    menu: {
        type: Object as PropType<MenuItemType>,
        default: []
    }
})
const hasChildren = computed(() => {
    return props.menu.children && props.menu.children.length > 0
})
const itemComponent = computed(() => {
    return hasChildren.value ? 'el-submenu' : 'el-menu-item'
})
</script>

<style scoped lang='scss'>
.el-menu-item {
    display: flex;
    align-items: center;
}
</style>