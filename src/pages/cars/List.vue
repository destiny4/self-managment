<template>
    <div class='md-bg'>
        <MarkDown :content='content' placeholder="请输入内容"></MarkDown>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted,watch } from 'vue'
import type { PropType } from 'vue'
import MarkDown from '@/components/MarkDown/index.vue'

const content = ``
</script>

<style scoped lang='scss'>
.md-bg{
    background: #FFFFFF;
    height:100%
}
</style>