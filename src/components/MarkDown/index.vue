<template>
    <div id="markdown"></div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'

import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import type { Editor as EditorType } from '@toast-ui/editor/types/editor.d';
import '@toast-ui/editor/dist/i18n/zh-cn';

import chart from '@toast-ui/editor-plugin-chart';
import '@toast-ui/chart/dist/toastui-chart.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-clojure.js';
import 'prismjs/themes/prism.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

let editor: EditorType | Viewer
const props = defineProps({
    content: {
        type: String,
        default: ''
    },
    height: {
        type: String || null,
        default: null
    },
    // 查看状态
    view: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: 'Please enter text...'
    },
})
const chartOptions = {
    minWidth: 100,
    maxWidth: 600,
    minHeight: 100,
    maxHeight: 300
};
const plugins: Array<any> = [[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]
// 添加图表插件   
// plugins.push([chart, chartOptions])
onMounted(() => {
    const Con = props.view ? Viewer : Editor
    editor = new Con({
        el: document.querySelector('#markdown')!,
        height: props.height || '100%',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        initialValue: props.content,
        language: 'zh-CN',
        placeholder: props.placeholder,
        plugins: plugins
    });
})

const getMarkDown = () => {
    return (editor as EditorType).getMarkdown()
}
const getHtml = () => {
    return (editor as EditorType).getHTML()
}

</script>

<style lang='scss'>
.toastui-editor-contents .toastui-editor-md-preview-highlight::after {
    background-color:white;
}
</style>