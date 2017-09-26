<template>
  <div class="table">
    <div class="lee-panel">
      <div class="heading primary-text">Table</div>
      <div class="content">
        <div class="toolbar justify-box">
          <el-switch
            v-model="table_type_judge"
            on-text="Stripe"
            off-text="Border"
            on-color="#20A0FF"
            off-color="#13CE66"
            :width="80">
          </el-switch>
        </div>
        <lee-table :type="table_type" :tableData="showTableData" ref="lee-table" @deleteData="deleteDataFunc"></lee-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="perPage"
          layout="total, prev, pager, next, jumper"
          :total="tableData.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script type="javascript">
  import Table from '@/components/table.vue';
  export default {
    name: 'Table',
    components: {
      'lee-table': Table
    },
    data() {
      return {
        table_type_judge: false,
        tableData: [
          {
            id: '1',
            name: 'Monkey.D.Luffy',
            feature: 'rubber, eat',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates',
            bounty: 500000000
          },
          {
            id: '2',
            name: 'Roronoa Zoro',
            feature: 'Three pole flow， drink',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates',
            bounty: 320000000
          },
          {
            id: '3',
            name: 'Nami',
            feature: 'beautiful thief',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates',
            bounty: 200000000
          },
          {
            id: '4',
            name: 'Usopp',
            feature: 'lie',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates',
            bounty: 320000000
          },
          {
            id: '5',
            name: 'Sanji',
            feature: 'cook',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates',
            bounty: 177000000
          },
          {
            id: '6',
            name: 'Tony Tony Chopper',
            feature: 'doctor',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates',
            bounty: 100
          },
          {
            id: '7',
            name: 'Nico Robin',
            feature: 'beautiful, knowledge',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates',
            bounty: 130000000
          },
          {
            id: '8',
            name: 'Franky',
            feature: 'robot, build',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates',
            bounty: 94000000
          },
          {
            id: '9',
            name: 'Brook',
            feature: 'music, skeleton',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates',
            bounty: 83000000
          }
        ],
        currentPage: 1,
        perPage: 10
      }
    },
    computed: {
      table_type() {
        return this.table_type_judge ? { stripe: true, border: false } : { stripe: false, border: true }
      },
      showTableData() {
        return this.tableData.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val;
        this.$refs['lee-table'].filterTag();
      },
      deleteDataFunc(data) {
        this.tableData = this.tableData.filter(function(value){
          return value.id !== data.id
        });
      }
    }
  }
</script>
