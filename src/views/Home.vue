<template>
  <div class="home">
    <lee-header></lee-header>
    <main>
      <div class="sidebar">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" theme="dark">
          <router-link to="/">
            <el-menu-item index="1">
              <i class="fa fa-home"></i>
              <span slot="title">Home</span>
            </el-menu-item>
          </router-link>
          <router-link to="/photo">
            <el-menu-item index="2">
                <i class="fa fa-photo"></i>
                <span slot="title">Pictures</span>
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
    </main>
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
