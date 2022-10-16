import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path  from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  // 让v3的setup语法糖增强
  //在使用setup语法糖的时候没办法直接为组件定义name，需要使用两个script标签来完成
  plugins: [vue(),vueSetupExtend()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  },
  css:{
    preprocessorOptions:{
      less:{
        additionalData:`
        @import "@/assets/styles/variables.less";
        @import "@/assets/styles/mixins.less";
        `
      }
    }
  }
})
