<template>
  <div class="lee-weather lee-panel">
    <div class="heading primary">
      <div class="justify-vertical">
        <i class="fa fa-cloud"></i>
        <span class="location">{{ weatherData.location }}</span>
      </div>
      <div class="temperature">{{ weatherData.temperature }}</div>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="8">
          <div class="grid-content justify-vertical">
            <span class="small-text">Humidity</span>
            <span class="value">{{weatherData.humidity}}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content justify-vertical">
            <span class="small-text">Winds</span>
            <span class="value">{{weatherData.winds}}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content justify-vertical">
            <span class="small-text">API</span>
            <span class="value success-text">{{weatherData.API}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="javascript">
  export default {
    name: 'Weather',
    props: ['weatherData']
  }
</script>
