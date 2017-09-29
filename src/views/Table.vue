<template>
  <div class="table">
    <div class="lee-panel">
      <div class="heading primary-text">Table</div>
      <div class="content">
        <div class="toolbar justify-between">
          <el-switch
            v-model="table_type_judge"
            on-text="Stripe"
            off-text="Border"
            on-color="#20A0FF"
            off-color="#13CE66"
            :width="80">
          </el-switch>
          <el-button type="primary" @click='addDataFunc'>
            <span>Add</span>
            <i class="fa fa-plus"></i>
          </el-button>
        </div>
        <lee-table :type="table_type" :tableData="showTableData" ref="lee-table" @deleteData="deleteDataFunc" @editData="editDataFunc"></lee-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="perPage"
          layout="total, prev, pager, next, jumper"
          :total="tableData.length">
        </el-pagination>
        <el-dialog
          title="Edit"
          :visible.sync="dialogVisible"
          size="tiny"
          :before-close="handleDialogClose">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="ID">
              <el-input v-model="form.id" :disabled='true'></el-input>
            </el-form-item>
            <el-form-item label="Name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Rate">
              <div class="justify-box" style="height: 36px;">
                <el-rate v-model="form.rate"></el-rate>
              </div>
            </el-form-item>
            <el-form-item label="Description">
              <el-input v-model="form.desc" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="Feature">
              <el-input v-model="form.feature"></el-input>
            </el-form-item>
            <el-form-item label="Team">
              <el-radio-group v-model="form.team">
                <el-radio label="The Straw Hat Pirates"></el-radio>
                <el-radio label="MARINE"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Bounty">
              <el-input v-model="form.bounty" type="text" value="number"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="ensureFunc">Ensure</el-button>
          </span>
        </el-dialog>
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
            rate: 5,
            feature: 'rubber, eat',
            desc: "Dream is to find the legendary ONE, become ONE PIECE",
            team: 'The Straw Hat Pirates',
            bounty: 500000000
          },
          {
            id: '2',
            name: 'Roronoa Zoro',
            rate: 5,
            feature: 'Three pole flow， drink',
            desc: "For when I was a child and close friend's agreement on the road to the world's first swordsman, then become luffy comes out after the first partner.",
            team: 'The Straw Hat Pirates',
            bounty: 320000000
          },
          {
            id: '3',
            name: 'Nami',
            rate: 3,
            feature: 'beautiful thief',
            desc: 'Is to draw the chart of the genius of navigation precision.',
            team: 'The Straw Hat Pirates',
            bounty: 200000000
          },
          {
            id: '4',
            name: 'Usopp',
            rate: 3,
            feature: 'lie',
            desc: 'Dream is to be a brave sea warrior.',
            team: 'The Straw Hat Pirates',
            bounty: 320000000
          },
          {
            id: '5',
            name: 'Sanji',
            rate: 4,
            feature: 'cook',
            desc: 'Dream is to find the sea of legends All Blue and follow the road together into the grand line.',
            team: 'The Straw Hat Pirates',
            bounty: 177000000
          },
          {
            id: '6',
            name: 'Tony Tony Chopper',
            rate: 1,
            feature: 'doctor',
            desc: 'The dream is to become a "panacea".',
            team: 'The Straw Hat Pirates',
            bounty: 100
          },
          {
            id: '7',
            name: 'Nico Robin',
            rate: 3,
            feature: 'beautiful, knowledge',
            desc: 'Goal is to find the real historical text, will never forgive those who trample the historical relics.',
            team: 'The Straw Hat Pirates',
            bounty: 130000000
          },
          {
            id: '8',
            name: 'Franky',
            rate: 4,
            feature: 'robot, build',
            desc: 'French is originally want to create a dream boat, but, after the completion of "sonny" just want to see their manufacturing ship will arrive at the end of the world.',
            team: 'The Straw Hat Pirates',
            bounty: 94000000
          },
          {
            id: '9',
            name: 'Brook',
            rate: 3,
            feature: 'music, skeleton',
            desc: 'Ghost island after the battle, from luffy mouth to learn of partner lab is now safe to perform and the stipulations of the lab, not formally joined the straw hat pirates group.',
            team: 'The Straw Hat Pirates',
            bounty: 83000000
          }
        ],
        currentPage: 1,
        perPage: 10,
        dialogVisible: false,
        form: {
          id: null,
          name: '',
          feature: '',
          desc: '',
          team: '',
          bounty: 0
        }
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
      },
      editDataFunc(data) {
        this.form = Object.assign({}, data);
        this.dialogVisible = true;
      },
      ensureFunc() {
        if(this.form.id) {
          this.updateTableData(this.form.id);
        }
        else {
          this.addTableData();
        }
        this.dialogVisible = false;
      },
      updateTableData(id) {
        var data_index = this.tableData.findIndex(function(value){
          return value.id === id
        });
        this.tableData.splice(data_index, 1, this.form);
      },
      handleDialogClose() {
        this._resetForm();
      },
      addDataFunc() {
        this.dialogVisible = true;
        this._resetForm();
      },
      addTableData() {
        var new_id = parseInt(this.tableData[this.tableData.length - 1].id) + 1;
        this.form.id = new_id;
        this.tableData.push(this.form);
      },
      _resetForm() {
        this.form = {
          id: null,
          name: '',
          rate: 0,
          feature: '',
          desc: '',
          team: '',
          bounty: 0
        }
      }
    }
  }
</script>
