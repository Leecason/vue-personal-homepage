<template>
  <div class="charts">
    <el-row :gutter="10">
      <el-col :md="12">
        <div class="lee-panel">
          <div class="heading warning-text">
            Line
          </div>
          <div class="content">
            <ve-line :data="chartData" :settings="lineChartSettings"></ve-line>
          </div>
        </div>
      </el-col>
      <el-col :md="12">
        <div class="lee-panel">
          <div class="heading warning-text">
            Line Area
          </div>
          <div class="content">
            <ve-line :data="chartData" :settings="areaChartSettings"></ve-line>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :md="12">
        <div class="lee-panel">
          <div class="heading warning-text">
            Histogram
          </div>
          <div class="content">
            <ve-histogram :data="chartData" :settings="areaChartSettings"></ve-histogram>
          </div>
        </div>
      </el-col>
      <el-col :md="12">
        <div class="lee-panel">
          <div class="heading warning-text">
            Ring
          </div>
          <div class="content">
            <ve-ring :data="chartData" :settings="ringChartSettings"></ve-ring>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :md="12">
        <div class="lee-panel">
          <div class="heading warning-text">
            Funnel
          </div>
          <div class="content">
            <ve-funnel :data="chartData" :settings="funnelChartSettings"></ve-funnel>
          </div>
        </div>
      </el-col>
      <el-col :md="12">
        <div class="lee-panel">
          <div class="heading warning-text">
            Radar
          </div>
          <div class="content">
            <ve-radar :data="chartData" :settings="radarChartSettings"></ve-radar>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="javascript">
  export default {
    name: 'Chart',
    data() {
      return {
        chartData: {
          columns: ['Day', 'Season1', 'Season2', 'Account for', 'others'],
          rows: [
            { 'Day': 'Mon', 'Season1': 1523, 'Season2': 523, 'Account for': 0.12, 'others': 100 },
            { 'Day': 'Tues', 'Season1': 1223, 'Season2': 1523, 'Account for': 0.345, 'others': 100 },
            { 'Day': 'Wed', 'Season1': 2123, 'Season2': 423, 'Account for': 0.7, 'others': 100 },
            { 'Day': 'Thurs', 'Season1': 4123, 'Season2': 823, 'Account for': 0.31, 'others': 100 },
            { 'Day': 'Fri', 'Season1': 3123, 'Season2': 1323, 'Account for': 0.12, 'others': 100 },
            { 'Day': 'Sat', 'Season1': 7123, 'Season2': 323, 'Account for': 0.65, 'others': 100 },
            { 'Day': 'Sun', 'Season1': 5123, 'Season2': 1223, 'Account for': 0.66, 'others': 100 }
          ]
        },
        lineChartSettings: {
          dimension: ['Day'],
          metrics: [ 'Season1', 'Season2', 'Account for'],
          axisSite: {
            right: ['Account for']
          },
          yAxisType: ['KMB', 'percent'],
          yAxisName: ['Cost', 'Account for'],
          area: false,
          stack: {
            'Cost': ['Season1', 'Season2']
          }
        },
        areaChartSettings: {
          dimension: ['Day'],
          metrics: [ 'Season1', 'Season2', 'Account for'],
          axisSite: {
            right: ['Account for']
          },
          yAxisType: ['KMB', 'percent'],
          yAxisName: ['Cost', 'Account for'],
          area: true,
          stack: {
            'Cost': ['Season1', 'Season2']
          }
        },
        ringChartSettings: {
          dimension: 'Day',
          metrics: 'Season1',
          dataType: 'KMB',
          selectedMode: 'single',
          hoverAnimation: false,
          radius: [100, 80],
          offsetY: 200
        },
        funnelChartSettings: {
          dimension: 'Day',
          metrics: 'Season1',
          dataType: 'KMB',
          sequence: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
          ascending: false
        },
        radarChartSettings: {
          dimension: ['Day'],
          metrics: ['Season1', 'Season2', 'Account for'],
          dataType: { 'Account for': 'percent' }
        }
      }
    }
  }
</script>
