/**
 * api管理
 */

// request.js不在Vue中，所以不能使用main.js中全局挂载的$request
import request from "./../utils/request";

export default {
  login(params) {
    return request({
      url: "/users/login",
      method: "post",
      data: params,
    });
  },
  noticeCount(params) {
    return request({
      url: "/leave/count",
      method: "get",
      data: {},
      // 局部是否使用mock
      mock: true,
    });
  },
  getMenuList(params) {
    return request({
      url: "/menu/list",
      method: "get",
      data: params,
    });
  },
};
