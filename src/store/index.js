/**
 * Vuex状态管理
 */
 import { createStore } from 'vuex'
 import mutations from './mutations'
 import storage from './../utils/storage'
 
 const state = {
    //  Vuex配合storage使用，Vuex强刷的话，数据会丢失，所以配合storage使用
     userInfo: "" || storage.getItem("userInfo") // 获取用户信息
 }
 export default createStore({
     state,
     mutations
 })