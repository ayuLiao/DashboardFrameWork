<script setup>
// https://v3.cn.vuejs.org/api/sfc-script-setup.html#defineprops-%E5%92%8C-defineemits
const props = defineProps({
  menuList: Array,
});
</script>

<template>
  <template v-for="menu in menuList">
    <el-sub-menu
      v-if="
        menu.children &&
        menu.children.length > 0 &&
        menu.children[0].menuType == 1
      "
      :key="menu._id"
      :index="menu.path"
    >
      <template #title>
        <!-- https://segmentfault.com/q/1010000040569967 -->
        <el-icon><component :is="menu.icon" /></el-icon>
        <span>{{ menu.menuName }}</span>
      </template>
      <TreeMenu :menuList="menu.children" />
    </el-sub-menu>
    <el-menu-item
      v-else-if="menu.menuType == 1"
      :index="menu.path"
      :key="menu._id"
      >{{ menu.menuName }}</el-menu-item
    >
  </template>
</template>
