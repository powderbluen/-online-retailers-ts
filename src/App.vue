<template>
  <!-- 路由占位符 -->
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import request from './utils/request'
const test = async () => {
  const res = await request.get('/home/index')
  console.log(res);

}

test()
</script>

<style scoped lang="less">
@import '@/assets/styles/variables.less';
@import '@/assets/styles/mixins.less';

h1 {
  background-color: @sucColor;
  .hoverShadow()
}
</style>
