<template>
  <div class="overview">
    <div class="symbol" :class="[type]">
      <i :class="'fa fa-' + icon"></i>
    </div>
    <div class="value">
      <div class="count">{{ count }}</div>
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script type="javascript">
  export default {
    name: 'basicCard',
    props: ['icon', 'type', 'name', 'count']
  }
</script>
