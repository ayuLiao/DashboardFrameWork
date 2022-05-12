<script setup>
// element-plus表单验证用法
// https://penueling.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/vue3-elementui-plus-%E8%A1%A8%E5%96%AE%E9%A9%97%E8%AD%89%E4%BD%BF%E7%94%A8-refs/

import { reactive, ref, getCurrentInstance  } from 'vue';
const { proxy } = getCurrentInstance() 

const user = reactive({
  userName: "",
  userPwd: ""
})

const userForm = ref();

const rules = {
    userName: [
      {
        required: true,
        message: "请输入用户名",
        trigger: "blur",
      },
    ],
    userPwd: [
      {
        required: true,
        message: "请输入密码",
        trigger: "blur",
      },
    ],
}

 function login() {
      userForm.value.validate((valid) => {
        if (valid) {
          proxy.$api.login(user).then((res) => {
            proxy.$store.commit("saveUserInfo", res);
            proxy.$router.push("/welcome");
          });
        } else {
          return false;
        }
      });
    }

</script>

<template>
  <div class="login-wrapper">
    <div class="modal">
      <!-- https://juejin.cn/post/7033953300731035655 -->
      <!-- ref绑定变量， :ref绑定函数 -->
      <el-form ref="userForm" :model="user" status-icon :rules="rules">
        <div class="title">火星</div>
        <el-form-item prop="userName">
          <el-input
            type="text"
            prefix-icon="el-icon-user"
            v-model="user.userName"
          />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            type="password"
            prefix-icon="el-icon-view"
            v-model="user.userPwd"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>



<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .modal {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>