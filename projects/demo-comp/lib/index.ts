/*
 * @Author: jayce jaycethanks@outlook.com
 * @Date: 2023-11-10 11:16:22
 * @LastEditors: jayce jaycethanks@outlook.com
 * @LastEditTime: 2023-11-13 09:53:14
 * @FilePath: /bxh2b/projects/demo-comp/lib/index.ts
 * @Description: 
 * 
 */
import { App } from "vue";
import DemoComp from "./DemoComp.vue";
export {DemoComp}

enum NUMS{
    A,
    B,
    C
}
const a = 1
const b = new Date()
export default {
    install(app:App){
        app.component('demo-comp',DemoComp)
    }
}