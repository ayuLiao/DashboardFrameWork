/**
 * Mutations业务层数据提交
 * 
 * https://vuex.vuejs.org/zh/guide/mutations.html#%E6%8F%90%E4%BA%A4%E8%BD%BD%E8%8D%B7%EF%BC%88payload%EF%BC%89
 */
 import storage from './../utils/storage'

 export default {
     saveUserInfo(state,userInfo){
         state.userInfo = userInfo;
         storage.setItem('userInfo',userInfo)
     }
 }