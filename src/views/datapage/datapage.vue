<template>
  <div id="data-container">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="本地数据"
        name="first"
      >
        <h4>本地数据</h4>
      </el-tab-pane>
      <el-tab-pane
        label="工作流"
        name="fourth"
      >
        <DataOrigin></DataOrigin>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import DataOrigin from './dataorigin'
export default {
  components: {
    DataOrigin
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick () {

    }
  }
}
</script>

<style>
.el-tabs__item {
  padding: 0 20px !important;
  font-size: 18px;
  color: #3f3a8a;
  font-weight: bold;
}
#data-container .is-active {
  border-bottom-color: #fff;
  background-color: #3f3a8a;
  color: #fff;
  border: 1px solid #3f3a8a;
  border-radius: 3px 3px 0 0;
}
.el-tabs__active-bar {
  display: none;
}
.el-tabs__nav-wrap::after {
  height: 1px !important;
}
</style>
