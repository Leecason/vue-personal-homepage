<template>
  <div class="lee-user-panel">
    <div class="heading">
      <div class="info">
        <span class="name">Cason Lee</span>
        <span class="role">Administrator</span>
      </div>
      <img src="../assets/user_photo.jpeg" width="100" height="100" />
    </div>
    <div class="list">
      <div class="list-item" v-for="info in user.infos">
        <i :class="'fa fa-' + info.icon" style="width: 20%"></i>
        <span style="width: 40%">{{info.role}}</span>
        <span style="width: 40%">{{info.value}}</span>
      </div>
    </div>
  </div>
</template>

<script type="javascript">
  export default {
    name: 'userPanel',
    props: ['user']
  }
</script>
