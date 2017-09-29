<template>
  <el-table
    :data="tableData"
    :border="type.border"
    :stripe="type.stripe"
    :default-sort = "{prop: 'id', order: 'ascending'}"
    style="width: 100%">
    <el-table-column type="expand">
      <template scope="props">
        <el-form label-position="left" inline class="table-expand">
          <el-form-item label="name">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="team">
            <span>{{ props.row.team }}</span>
          </el-form-item>
          <el-form-item label="ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="feature">
            <span>{{ props.row.feature }}</span>
          </el-form-item>
          <el-form-item label="description">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="bounty">
            <span>{{ props.row.bounty }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="ID"
      sortable
      prop="id"
      :width="100">
    </el-table-column>
    <el-table-column
      label="Name"
      sortable
      prop="name"
      :width="120">
    </el-table-column>
    <el-table-column label="Fight rate" :width="150">
      <template scope="scope">
        <el-rate v-model="scope.row.rate" disabled></el-rate>
      </template>
    </el-table-column>
    <el-table-column
      label="Description"
      sortable
      prop="desc">
    </el-table-column>
    <el-table-column
      label="Feature"
      prop="feature"
      :width="150">
    </el-table-column>
    <el-table-column
      label="Bounty"
      sortable
      prop="bounty"
      :width="120">
    </el-table-column>
    <el-table-column
      label="Team"
      prop="team"
      :width="250">
    </el-table-column>
    <el-table-column label="Action" :width="150">
      <template scope="scope">
        <el-button
          size="small"
          :plain='true'
          type='info'
          @click="handleEdit(scope.$index, scope.row)">edit</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script type="javascript">
  export default {
    name: 'Table',
    props: {
      type: {
        type: Object,
        default() {
          return {
            stripe: true,
            border: false
          }
        }
      },
      tableData: {
        type: Array,
        default() {
          return [
            {
              tableData: [
                {
                  id: '12987122',
                  name: 'Monkey.D.Luffy',
                  category: 'rubber',
                  desc: 'xxxxxx',
                  team: 'The straw hat Pirates',
                }
              ]
            }
          ]
        }
      }
    },
    data() {
      return {
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.$emit('editData', row);
      },
      handleDelete(index, row) {
        this.$confirm('You will delete that data?', 'Delete', {
          confirmButtonText: 'Ensure',
          cancelButtonText: 'Cancel',
          type: 'error'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'delete success!'
          });
          this.$emit('deleteData', row);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'cancel delete'
          });
        });
      }
    }
  }
</script>
