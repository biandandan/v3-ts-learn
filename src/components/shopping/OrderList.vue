<!-- 订单列表 -->
<template>
  <div class="order-container">
    <div class="query-wrapper">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="订单编号">
          <el-input v-model="form.code" placeholder="请输入关键字..." />
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="form.name" placeholder="请输入关键字..." />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getTableData">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-wrapper">
      <el-table :data="table.tableData" height="100%" border size="small">
        <el-table-column prop="code" label="订单编号" width="180" />
        <el-table-column prop="name" label="商品名称" width="180" />
        <el-table-column prop="price" label="商品价格" />
      </el-table>
    </div>
    <el-pagination
      v-model:current-page="table.currentPage"
      v-model:page-size="table.pageSize"
      :page-sizes="[15, 20, 30, 50]"
      small
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import { InitData } from './types/order'
import { getOrderList } from './api/api'

export default {
  setup() {
    const data = reactive(new InitData())

    onMounted(() => {
      getTableData()
    })

    const getTableData = (flag: boolean = false) => {
      getOrderList(data.form).then((res) => {
        data.table.tableData = res.data.list
      })
    }

    const handleSizeChange = (pageSize: number) => {
      data.table.pageSize = pageSize
    }
    const handleCurrentChange = (currentPage: number) => {
      data.table.currentPage = currentPage
    }

    return {
      ...toRefs(data),
      getTableData,
      handleSizeChange,
      handleCurrentChange,
    }
  },
}
</script>

<style lang="scss" scoped>
.order-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  > .query-wrapper {
    padding-bottom: 10px;
    .el-form-item {
      margin-bottom: 0px;
    }
  }
  > .table-wrapper {
    height: 0;
    flex: 1;
    padding-bottom: 10px;
  }
  > .el-pagination {

  }
}
</style>
