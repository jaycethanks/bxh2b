<!--
 * @Author: jayce jaycethanks@outlook.com
 * @Date: 2023-11-13 09:51:48
 * @LastEditors: fuchen
 * @LastEditTime: 2023-11-21 10:01:19
 * @FilePath: /bxh2b/projects/demo-comp-example/src/App.vue
 * @Description: 
 * 
-->
<script setup lang="ts">
import { DemoComp } from "@bxh2b/demo-comp"
import "@bxh2b/demo-comp/dist/style.css"
</script>

<template>
  <div>
    <DemoComp hello="world" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
