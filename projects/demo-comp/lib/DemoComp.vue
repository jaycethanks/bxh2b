<!--
 * @Author: jayce jaycethanks@outlook.com
 * @Date: 2023-11-10 11:16:22
 * @LastEditors: fuchen
 * @LastEditTime: 2023-11-21 14:58:57
 * @FilePath: /bxh2b/projects/demo-comp/lib/DemoComp.vue
 * @Description: 
 * 
-->
<script lang='ts' setup>
defineProps<{
    hello:string
}>()
let color = '#fff440'
</script>
<template>
    <button style="color:yellow">hello{{ hello }}</button>
</template>
<style lang='scss' scoped>
button{
    color: #d75e5e;
}
</style>