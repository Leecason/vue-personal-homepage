<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :sm="24" :md="6" v-for="card in cardsData" :key="card.id">
        <div class="grid-content bg-purple">
          <lee-status-card :icon="card.icon" :count="card.count" :type="card.type" :name="card.name"></lee-status-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :sm="24" :md="16">
        <lee-progress title="Skills" :progressData="progressData"></lee-progress>
      </el-col>
      <el-col :sm="24" :md="8">
        <lee-user-overview :user="user" :profile="profileData"></lee-user-overview>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :sm="24" :md="16">
        <lee-step title="Steps For What To Do Today" :stepData="stepData"></lee-step>
      </el-col>
      <el-col :sm="24" :md="8">
        <div class="lee-panel">
          <div class="heading warning-text">
            Cost
          </div>
          <div class="content">
            <ve-pie :data="chartData" :settings="pieSettings" height="360px"></ve-pie>
          </div>
        </div>
        <lee-weather :weatherData="weatherData"></lee-weather>
      </el-col>
    </el-row>
  </div>
</template>

<script type="javascript">
  import statusCard from '@/components/status_card.vue';
  import Overview from '@/components/user_overview.vue';
  import Progress from '@/components/progress.vue';
  import Step from '@/components/step.vue';
  import Weather from '@/components/weather.vue';
  export default {
    name: 'Dashboard',
    components: {
      'lee-status-card': statusCard,
      'lee-user-overview': Overview,
      'lee-progress': Progress,
      'lee-step': Step,
      'lee-weather': Weather
    },
    data () {
      return {
        user: {
          photo: require('@/assets/img/user_photo.jpeg'),
          name: 'Cason Lee',
          role: 'Administrator'
        },
        cardsData: [
          {
            icon: 'user',
            count: '996',
            type: 'primary',
            name: 'Friends'
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
            tags: ['Sass', 'Less', 'Plain CSS', 'Bootstrap'],
            value: 60
          },
          {
            name: 'Build Tools',
            tags: ['NPM', 'Webpack', 'Gulp', 'Browserify', 'Grunt'],
            value: 100
          },
          {
            name: 'Package Managers',
            tags: ['yarn', 'npm', 'Bower'],
            value: 45
          },
          {
            name: 'Text Editors',
            tags: ['VS Code', 'Atom', 'Sublime Text', 'WebStorm', 'Vim'],
            value: 85
          }
        ],
        chartData: {
          columns: ['type', 'cost', 'percent'],
          rows: [
            { 'type': 'Food', 'cost': 130, 'percent': 0.12 },
            { 'type': 'Shopping', 'cost': 122, 'percent': 0.345 },
            { 'type': 'Daily', 'cost': 212, 'percent': 0.7 },
            { 'type': 'Entertainment', 'cost': 412, 'percent': 0.31 },
            { 'type': 'Phone', 'cost': 312, 'percent': 0.6 },
            { 'type': 'Clothes', 'cost': 712, 'percent': 0.65 },
            { 'type': 'Others', 'cost': 512, 'percent': 0.6 }
          ]
        },
        pieSettings: {
          dimension: 'type',
          metrics: 'cost',
          selectedMode: 'single',
          hoverAnimation: true,
          radius: 100,
          offsetY: 200
        },
        stepData: [
          {
            title: 'What to do in the morning?',
            description: '7.30 AM get up, after braekfast go out running',
            icon: 'fa fa-sun-o'
          },
          {
            title: 'What to eat for lunch?',
            description: 'A simple meal, a thick soup and an apple',
            icon: 'fa fa-cutlery'
          },
          {
            title: 'What plan in the afternoon?',
            description: 'Coding, Coding, Coding...',
            icon: 'fa fa-github'
          },
          {
            title: 'How to relax today?',
            description: 'Coding, Coding, Coding, Coding, Coding, Coding, Coding, Coding, Coding, Coding, Coding, Coding...',
            icon: 'fa fa-github'
          },
          {
            title: 'How to play with friends in the evening?',
            description: 'Coding, Coding, Coding...',
            icon: 'fa fa-gamepad'
          },
          {
            title: 'When to sleep?',
            description: 'Sleep? Impossible',
            icon: 'fa fa-bed'
          }
        ],
        weatherData: {
          location: 'Chengdu',
          temperature: '30°',
          API: 43,
          humidity: '84%',
          winds: '10mph'
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
