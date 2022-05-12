/**
 * 环境配置封装
 */

// import.meta.env.MODE 当前项目环境

const env = import.meta.env.MODE
const EnvConfig = {
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/66875ed41c15b16da472aa6c2e03c4c6/api'
    },
    production:{
        baseApi:'//xxx.com/api',
        mockApi:'https://www.fastmock.site/mock/66875ed41c15b16da472aa6c2e03c4c6/api'
    }
}
export default {
    env,
    // 是否开启Mock
    mock:true, 
    namespace:'manager',
    ...EnvConfig[env]
}