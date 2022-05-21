<script setup>
import { onMounted, reactive, ref } from "vue";
import api from "../api";
import router from "../router";
import store from "../store";
import TreeMenu from "./TreeMenu.vue";
import BreadCrumb from "./BreadCrumb.vue";

let userInfo = reactive(store.state.userInfo);

let noticeCount = ref(0);
let menuList = reactive({
  data: [],
});
let activeMenu = location.hash.slice(1);

async function getNoticeCount() {
  const count = await api.noticeCount();
  noticeCount.value = count;
}

async function getMenuList() {
  const list = await api.getMenuList();
  menuList.data = list;
}

function handleLogout() {
  if (key == "email") return;
  store.commit("saveUserInfo", "");
  userInfo = {};
  router.push("/login");
}

onMounted(() => {
  getNoticeCount();
  getMenuList();
});
</script>

<template>
  <div class="basic-layout">
    <div class="nav-side">
      <div class="logo">
        <img src="./../assets/logo.png" alt="" class="src" />
        <span>DashBoard</span>
      </div>
      <!-- 导航菜单 -->
      <!-- https://element-plus.org/zh-CN/component/menu.html#menu-%E5%B1%9E%E6%80%A7 -->
      <el-menu
        class="nav-menu"
        background-color="#001529"
        text-color="#fff"
        router
      >
        <TreeMenu :menuList="menuList.data" />
      </el-menu>
    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="nav-left">
          <div class="bread">
            <BreadCrumb />
          </div>
        </div>
        <div class="user-info">
          <!-- 信息红点通知 -->
          <el-badge
            :is-dot="noticeCount > 0 ? true : false"
            class="notice"
            type="danger"
          >
            <el-icon><bell /></el-icon>
          </el-badge>
          <!-- command 点击菜单项触发的事件回调 -->
          <el-dropdown @command="handleLogout">
            <span class="user-link">
              {{ userInfo.userName }}
              <el-icon><right /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email"
                  >邮箱：{{ userInfo.userEmail }}</el-dropdown-item
                >
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.basic-layout {
  position: relative;

  // 侧边栏
  .nav-side {
    position: fixed;
    width: 200px;
    // 浏览器可见窗口的百分比
    height: 100vh;
    background-color: #001529;
    color: #fff;
    // 超出y轴部分
    overflow-y: auto;
    // 宽度变化时，带动画效果
    transition: width 0.5s;

    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;
      img {
        margin: 0 16px;
        width: 32px;
        height: 32px;
      }
    }

    .nav-menu {
      height: calc(100vh - 50px);
      border-right: none;
    }
  }

  .content-right {
    // 因为父元素position:relative,所以直接移200px
    margin-left: 200px;

    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      // 利用flex，将元素排到两端
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;

      .nav-left {
        display: flex;
        align-items: center;
        .menu-fold {
          margin-right: 15px;
          font-size: 18px;
        }
      }

      .user-info {
        display: flex;
        align-items: center;
        .notice {
          line-height: 30px;
          margin-right: 15px;
        }

        .user-link {
          // 在鼠标指针悬停在元素上时显示相应样式
          cursor: pointer;
          color: #409eff;
        }
      }

      .wrapper {
        background: #eef0f3;
        padding: 20px;
        height: calc(100vh - 50px);
      }
    }
  }
}
</style>
