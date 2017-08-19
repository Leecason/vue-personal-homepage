<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="6" v-for="card in cardsData" :key="card.name">
        <div class="grid-content bg-purple">
          <lee-status-card :icon="card.icon" :count="card.count" :type="card.type" :name="card.name"></lee-status-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="16">
        <lee-progress title="Skills" :progressData="progressData"></lee-progress>
      </el-col>
      <el-col :span="8">
        <lee-user-overview :user="user" :profile="profileData"></lee-user-overview>
      </el-col>
    </el-row>
  </div>
</template>

<script type="javascript">
  import statusCard from './status_card.vue';
  import Overview from './user_overview.vue';
  import Progress from './Progress.vue';
  export default {
    name: 'Dashboard',
    components: {
      'lee-status-card': statusCard,
      'lee-user-overview': Overview,
      'lee-progress': Progress
    },
    data () {
      return {
        user: {
          photo: require('@/assets/user_photo.jpeg'),
          name: 'Cason Lee',
          role: 'Administrator'
        },
        cardsData: [
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
        profileData: [
          {
            icon: 'fa fa-user',
            key: 'Sex',
            value: 'Male'
          },
          {
            icon: 'fa fa-envelope',
            key: 'Email',
            value: 'leecason0722@gmail.com'
          },
          {
            icon: 'fa fa-location-arrow',
            key: 'Localtion',
            value: 'Chengdu, China'
          }
        ],
        progressData: [
          {
            name: 'Javascript',
            tags: ['Vue', 'React', 'Angular'],
            value: 80
          },
          {
            name: 'Css',
            tags: ['Sass', 'Less'],
            value: 60
          },
          {
            name: 'Html',
            tags: [],
            value: 30
          },
          {
            name: 'Office',
            tags: ['Excel', 'PPT', 'Word'],
            value: 100
          },
          {
            name: 'Other',
            tags: ['PhotoShop'],
            value: 45
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
