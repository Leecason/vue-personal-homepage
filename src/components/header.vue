<template>
  <header class="lee-header justify-between">
    <div class="left justify-box">
      <img :src="logo" width="50" height="50"/>
      <span class="success-text">VUE</span><span>HOMEPAGE</span>
    </div>
    <div class="command-bar justify-box">
      <div class="notification-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-badge is-dot class="item primary-text">
              <i class="fa fa-bell"></i>
            </el-badge>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled class="title">notification</el-dropdown-item>
            <el-dropdown-item divided v-for="message in 4" :key="message">
              <div class="message justify-between">
                <div class="text primary-text">You received a friend request</div>
                <div class="date">2 hours ago</div>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided>view more messages</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="account-info">
        <el-popover
          ref="popover"
          placement="bottom"
          width="100"
          trigger="hover">
          <div class="list">
            <div class="list-item">Your profile</div>
            <div class="list-item">Friends list</div>
            <div class="popover-divider"></div>
            <div class="list-item">Settings</div>
            <div class="list-item">Sign out</div>
          </div>
        </el-popover>
        <el-button v-popover:popover class="account-info-btn">
          <img class="avatar" :src="photo" />
          <i class="fa fa-caret-down"></i>
        </el-button>
      </div>
    </div>
  </header>
</template>

<script type="javascript">
  export default {
    name: 'Header',
    data() {
      return {
        logo: require('@/assets/img/logo.png'),
        photo: require('@/assets/img/user_photo.jpeg')
      }
    }
  }
</script>
