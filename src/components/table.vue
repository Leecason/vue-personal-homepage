<template>
  <el-table
    :data="tableData"
    :border="type.border"
    :stripe="type.stripe"
    :default-sort = "{prop: 'id', order: 'descending'}"
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
          <el-form-item label="category">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="description">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="ID"
      sortable
      prop="id">
    </el-table-column>
    <el-table-column
      label="name"
      sortable
      prop="name">
    </el-table-column>
    <el-table-column
      label="description"
      prop="desc">
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
      filterTag(value, row) {
        return row.tag === value;
      }
    }
  }
</script>
