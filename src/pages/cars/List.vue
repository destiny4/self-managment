<template>
    <div class="md-bg">
        <button @click='getMD'>获取markdown</button>
        <button @click='getHtml'>获取html</button>
        <MarkDown
            :content="content"
            placeholder="请输入内容"
            ref='mdRef'
        ></MarkDown>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, watch } from 'vue'
import type { PropType } from 'vue'
import MarkDown from '@/components/MarkDown/index.vue'

const content = ``
const mdRef=ref<any>(null)
const getMD=()=>{
    console.log(mdRef.value?.getMarkDown())
}
const getHtml=()=>{
    console.log(mdRef.value?.getHtml())
}
</script>

<style scoped lang='scss'>
.md-bg {
    background: #ffffff;
    height: 100%;
}
</style>