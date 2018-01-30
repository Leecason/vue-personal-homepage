<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script type="javascript">
  export default {
    name: 'app',
    data() {
      return {
        userInfo: {
          nick: null,
          uid: null
        }
      }
    },
    created() {
      //是否登录
      this.checkLogin()
    },
    mounted() {
      this.getUserInfo()
    },
    watch: {
      // 用户在进入页面时存在登录状态，但在做操作时正好登录过期了；
      // 用户手动删除了cookie/本地storage并做操作；
      // 用户在未登录的情况下手动输入(或者从收藏夹进入)某个需要登录的路由
      // 用户在已登录的情况下进入登录页路由
      '$route': 'checkLogin'
    },
    methods: {
      checkLogin() {
        if(!this.getCookie('session')) {
          this.$router.push('/login')
        }
      },
      getUserInfo() {
        // request userInfo
        this.userInfo = {
          nick: 'Leecason',
          uid: 10000
        }

        this.$store.commit('updateUserInfo', this.userInfo);
      }
    }
  }
</script>

<style>
  #app {
    height: 100%;
  }
</style>
