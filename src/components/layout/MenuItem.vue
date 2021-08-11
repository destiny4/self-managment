
<template>
    <component v-if="!menu.hiddenInMenu" :is="itemComponent" :index="menu.path" :key="menu.path">
        <svg-icon width='20' height='20' class='svg-icon' :name="menu.icon" v-if="menu.icon && !hasChildren"></svg-icon>
        <template #title v-if="!hasChildren">{{ menu.name }}</template>
        <template #title v-if="hasChildren">
            <div>
                <svg-icon  width='20' height='20' class='svg-icon' :name="menu.icon" v-if="menu.icon"></svg-icon>
                <span>{{ menu.name }}</span>
            </div>
        </template>
        <!-- 有子节点递归生成菜单项 -->
        <menu-item :menu="child" :key="child.name" v-for="child in menu.children" v-if="hasChildren"></menu-item>
    </component>
</template>
<script lang='ts'>
import { ElSubmenu, ElMenuItem } from 'element-plus'
export default {
    components: {
        ElSubmenu, ElMenuItem
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
.svg-icon{
    margin-right:8px;
}
</style>