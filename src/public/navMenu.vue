<template>
  <div
    id="navMenu-container"
    class="el-menu-container"
  >
    <el-menu
      @select="selectMenu"
      router
      active-text-color="#fff"
    >
      <el-menu-item
        v-for="item in menus"
        :key="item.index"
        :index="item.index"
        :class="isActive(item)"
      >
        <i
          class="icon iconfont"
          :class="item.icon"
        ></i>
        <span
          slot="title"
          class="menu-text"
        >{{ item.text }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menus: [{
        index: '/project',
        icon: 'icon-xiangmu',
        text: '项目'
      }, {
        index: '/datapage',
        icon: 'icon-shuju',
        text: '数据'
      }, {
        index: '/model',
        icon: 'icon-moxing',
        text: '模型'
      }]
    }
  },
  methods: {
    selectMenu (index, indexPath) {
      this.$router.push(index)
    },
    isActive ({ active, index }) {
      return {
        'is-active': (active || [index]).includes(this.$route.path)
      }
    }
  }
}
</script>
<style>
.el-menu-container {
  padding-top: 50px;
}
.el-menu-container .el-menu {
  border: 0;
}
.el-menu {
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #fff;
}
.el-menu-container .el-menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 150px;
  border-left: 2px solid #fff;
}
.el-menu-container .el-menu-item.is-active {
  background: #f1f1f9;
  margin-right: 0;
  border-left: 4px solid #3f3a8a;
}
.el-menu-container .el-menu-item.is-active i {
  color: #3f3a8a;
}
.el-menu-container .el-menu-item i {
  color: #3f3a8a;
  text-align: center;
  font-size: 36px;
  line-height: 36px;
  vertical-align: middle;
}
.el-menu-container .menu-text {
  font-size: 16px;
  line-height: 21px;
  color: #707070;
}
.el-menu-container .el-menu-item.is-active .menu-text {
  color: #3f3a8a;
}
</style>
