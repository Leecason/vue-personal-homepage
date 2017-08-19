<template>
  <div class="lee-step lee-panel">
    <div class="heading justify-between">
      <span class="title">{{title}}</span>
      <el-button type="primary" @click="next">Next</el-button>
    </div>
    <div class="content">
      <el-steps :space="100" direction="vertical" :active="active">
        <el-step v-for="step in stepData" :key="step.id">
          <div slot="title">{{ step.title }}</div>
          <i slot="icon" :class="step.icon"></i>
          <div slot="description">{{ step.description }}</div>
        </el-step>
      </el-steps>
    </div>
  </div>
</template>

<script type="javascript">
  export default {
    name: 'Step',
    props: {
      title: {
        type: String
      },
      stepData: {
        type: Array,
        default() {
          return [
            {
              title: 'What to do?',
              description: 'Coding',
              icon: 'fa fa-edit'
            }
          ]
        }
      }
    },
    data() {
       return {
        active: 1
      };
    },
    methods: {
      next() {
        if (this.active++ > this.stepData.length - 1) this.active = 0;
      }
    }
  }
</script>
