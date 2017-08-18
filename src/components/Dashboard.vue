<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="6" v-for="card in cards" :key="card.name">
        <div class="grid-content bg-purple">
          <status-card :icon="card.icon" :count="card.count" :type="card.type" :name="card.name"></status-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8">
        <user-panel :user="user"></user-panel>
      </el-col>
    </el-row>
  </div>
</template>

<script type="javascript">
  import statusCard from './status_card.vue';
  import userPanel from './user_panel.vue';
  export default {
    name: 'Dashboard',
    components: {
      'status-card': statusCard,
      'user-panel': userPanel
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
        ],
        user: {
          name: 'Cason Lee',
          role: 'Administrator',
          infos: [
            {
              icon: 'user',
              role: 'Sex',
              value: 'Male'
            },
            {
              icon: 'envelope',
              role: 'Email',
              value: 'leecason0722@gmail.com'
            },
            {
              icon: 'location-arrow',
              role: 'Localtion',
              value: 'Chengdu, China'
            }
          ]
        }
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
