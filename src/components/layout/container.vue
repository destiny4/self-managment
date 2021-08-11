<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import type { PropType } from 'vue'

</script>

<style lang='scss' scoped>
.container {
    background: #ffffff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
}
</style>