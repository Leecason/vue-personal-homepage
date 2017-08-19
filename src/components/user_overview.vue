<template>
  <div class="lee-overview lee-panel">
    <div class="heading">
      <div class="info">
        <span class="name">{{ user.name }}</span>
        <span class="role">{{ user.role }}</span>
      </div>
      <img :src="user.photo" width="100" height="100" />
    </div>
    <div class="list">
      <div class="list-item" v-for="info in profile" :key="info.id">
        <i :class="info.icon" style="width: 10%"></i>
        <span style="width: 40%">{{ info.key }}</span>
        <span style="width: 50%">{{ info.value }}</span>
      </div>
    </div>
  </div>
</template>

<script type="javascript">
  export default {
    name: 'Panel',
    props: {
      user: {
        type: Object,
        default: function() {
          return {
            photo: require('@/assets/img/user_photo.jpeg'),
            name: 'Cason Lee',
            role: 'Administrator'
          }
        }
      },
      profile: {
        type: Array
      }
    }
  }
</script>
