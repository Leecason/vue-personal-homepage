<template>
  <div class="lee-progress lee-panel">
    <div class="heading justify-between">
      {{ title }}
    </div>
    <div class="list progress-content">
      <div class="list-item" v-for="item in progressData">
        <div class="progress">
          <el-progress :text-inside="true" :stroke-width="13" :percentage="item.value" :status="judgeStatus(item.value)"></el-progress>
        </div>
        <div class="tags">
          <el-tag class="tag" type="primary" v-for="tag in item.tags" :key="tag">{{tag}}</el-tag>
        </div>
        <div class="name">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="javascript">
  export default {
    name: 'Progress',
    props: {
      title: {
        type: String
      },
      progressData: {
        type: Array,
        default: function() {
          return [
            {
              name: 'Vue',
              tags: [],
              value: 100
            }
          ]
        }
      }
    },
    methods: {
      judgeStatus: function(value) {
        if (value === 100) {
          return 'success'
        }
      }
    }
  }
</script>
