<script setup>
import { computed } from '@vue/reactivity';
import router from '../router';
import { ArrowRight } from '@element-plus/icons-vue'

const breadList = computed(() => router.currentRoute.value.matched)

</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
        <router-link to="/welcome" v-if="index==0">{{item.meta.title}}</router-link>
        <span v-else>{{item.meta.title}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>