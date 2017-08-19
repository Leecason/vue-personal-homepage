<template>
  <div class="home">
    <header></header>
    <div class="sidebar">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" theme="dark">
        <router-link to="/">
          <el-menu-item index="1">
            <i class="el-icon-star-on"></i>
            <span slot="title">Home</span>
          </el-menu-item>
        </router-link>
        <router-link to="/personal">
          <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">Personal</span>
          </el-menu-item>
        </router-link>
        <router-link to="/chart">
          <el-menu-item index="3">
            <i class="fa fa-bar-chart"></i>
            <span slot="title">Chart</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </div>
    <div class="main-content">
      <router-view></router-view>
      <footer class="content-footer">Author : <a class="primary-text" href="https://github.com/Leecason" target="_blank">Leecason</a></footer>
    </div>
  </div>
</template>

<script type="javascript">
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
