<template>
    <svg :class="svgClass" v-bind="$attrs" :style="{ color: color,width,height }">
        <use :xlink:href="iconName" />
    </svg>
</template>
  
 <script lang='ts'>
 import { defineComponent} from 'vue'
 export default defineComponent({
     name:'SvgIcon'
 })
 </script> 
  <script setup lang='ts'>


import {computed } from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: ''
    },
    width:{
        type: String||Number,
        default: '1em'
    },
    height:{
        type: String||Number,
        default: '1em'
    },
})

const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
    if (props.name) {
        return `svg-icon icon-${props.name}`
    }
    return 'svg-icon'
});
</script>
  
<style lang='scss'>
.svg-icon {
    fill: currentColor;
    vertical-align: middle;
}
</style>
  