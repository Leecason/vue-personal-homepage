<template>
  <div class="home">
    <lee-header></lee-header>
    <main>
      <div class="sidebar">
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" theme="dark">
          <router-link to="/">
            <el-menu-item index="1" @click="changeIndex('1')">
              <i class="fa fa-home"></i>
              <span slot="title">Home</span>
            </el-menu-item>
          </router-link>
          <router-link to="/picture">
            <el-menu-item index="2" @click="changeIndex('2')">
                <i class="fa fa-photo"></i>
                <span slot="title">Pictures</span>
            </el-menu-item>
          </router-link>
          <router-link to="/chart">
            <el-menu-item index="3" @click="changeIndex('3')">
              <i class="fa fa-bar-chart"></i>
              <span slot="title">Chart</span>
            </el-menu-item>
          </router-link>
          <router-link to="/table">
            <el-menu-item index="4" @click="changeIndex('4')">
              <i class="fa fa-table"></i>
              <span slot="title">Table</span>
            </el-menu-item>
          </router-link>
          <router-link to="/markdown">
            <el-menu-item index="5" @click="changeIndex('5')">
              <i class="fa fa-maxcdn"></i>
              <span slot="title">Markdown</span>
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
  import Header from '@/components/header.vue';
  export default {
    components: {
      'lee-header': Header
    },
    data() {
      return {
        activeIndex: '1',
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
