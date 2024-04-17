<script setup lang="ts">
import TreeChart from '@/components/fishBone/index.vue'
import { ref } from 'vue'
const treeData = ref({
    name: '质量管理',
    children: [
        {
            name: '人',
            value: 29,
            children: [
            ]
        },
        {
            name: '机',
            value: 9,
            children: [
            ]
        },
        {
            name: '料'
        },
        {
            name: '法'
        },
        {
            name: '环'
        },
        {
            name: '测'
        }
    ]
})
function onClickNode(data: any) {
    //  console.log('data:', data)
}


</script>
<template>
    <div>
        <TreeChart :treeData="treeData" :height="500" @click-node="onClickNode" />
    </div>
</template>
<style lang="less" scoped></style>