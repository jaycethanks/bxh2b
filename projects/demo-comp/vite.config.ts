/*
 * @Author: jayce jaycethanks@outlook.com
 * @Date: 2023-11-10 11:13:17
 * @LastEditors: jayce jaycethanks@outlook.com
 * @LastEditTime: 2023-11-13 09:53:10
 * @FilePath: /bxh2b/projects/demo-comp/vite.config.ts
 * @Description: 
 * 
 */
import { defineConfig, resolveBaseUrl } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// 为组件生成声明文件的插件
import dts from "vite-plugin-dts"
export default defineConfig({
  plugins: [vue(),dts({include:"./lib"})],
  build:{
    lib:{
      entry:resolve(__dirname,'lib/index.ts'),
      name:'demoComp',
      fileName:'demo-comp'
    },
    rollupOptions:{
      // 确保外部化处理那些你不想打包进库的以来
      external:['vue'],
      output:{
        // 在UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals:{
          vue:'Vue'
        }
      }
    }
  }
})
