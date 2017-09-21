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
        <lee-table :type="table_type" :tableData="showTableData" ref="lee-table"></lee-table>
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
            category: 'rubber, eat',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates'
          },
          {
            id: '2',
            name: 'Roronoa Zoro',
            category: 'Three pole flow， drink',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates'
          },
          {
            id: '3',
            name: 'Nami',
            category: 'beautiful thief',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates'
          },
          {
            id: '4',
            name: 'Usopp',
            category: 'lie',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates'
          },
          {
            id: '5',
            name: 'Sanji',
            category: 'cook',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates'
          },
          {
            id: '6',
            name: 'Tony Tony Chopper',
            category: 'doctor',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates'
          },
          {
            id: '7',
            name: 'Nico Robin',
            category: 'beautiful, knowledge',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates'
          },
          {
            id: '8',
            name: 'Franky',
            category: 'robot, build',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates'
          },
          {
            id: '9',
            name: 'Brook',
            category: 'music, skeleton',
            desc: 'xxxxxx',
            team: 'The straw hat Pirates'
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
      }
    }
  }
</script>
