<template>
  <el-row :gutter="10">
    <el-col :span="6" v-for="card in cards" :key="card.name">
      <div class="grid-content bg-purple">
        <basic-card :icon="card.icon" :count="card.count" :type="card.type" :name="card.name"></basic-card>
      </div>
    </el-col>
  </el-row>
</template>

<script type="javascript">
  import basicCard from './basic_card.vue';
  export default {
    name: 'Dashboard',
    components: {
      'basic-card': basicCard
    },
    data () {
      return {
        cards: [
          {
            icon: 'user',
            count: '996',
            type: 'primary',
            name: 'New Users'
          },
          {
            icon: 'eye',
            count: '170871',
            type: 'success',
            name: 'Views'
          },
          {
            icon: 'edit',
            count: '38470',
            type: 'warning',
            name: 'Comments'
          },
          {
            icon: 'download',
            count: '23416',
            type: 'danger',
            name: 'Donwloads'
          }
        ]
      }
    }
  }
</script>

<style type="text/css">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
