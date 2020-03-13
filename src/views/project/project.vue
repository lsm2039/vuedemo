<template>
  <div id="project-container">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="项目信息"
        name="first"
      >
        <h4>项目</h4>
        <el-button
          type="primary"
          plain
          size="mini"
          @click="getStore"
        >主要按钮</el-button>
      </el-tab-pane>
      <el-tab-pane
        label="工作流"
        name="fourth"
      >
        <h4>工作流</h4>
      </el-tab-pane>
      <el-tab-pane
        label="在线编程"
        name="second"
      >
        <Online></Online>
      </el-tab-pane>
      <el-tab-pane
        label="可视化"
        name="third"
      >
        <Visual></Visual>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>
<script>
import Visual from './visual'
import Online from './online'
export default {
  components: {
    Online,
    Visual
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
    },
    getStore () {
      console.log(this.$store.getters.not_show)
      console.log(this.$store.commit('switch_dialog'))
      console.log(this.$store.dispatch('switch_dialog'))
    }
  }
}
</script>

<style>
.el-tabs--top .el-tabs__item {
  padding: 0 20px !important;
  font-size: 18px;
  color: #3f3a8a;
  font-weight: bold;
}

#project-container .is-active {
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
