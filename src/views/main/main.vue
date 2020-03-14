<template>
  <div>
    <el-container id="main-container">
      <el-header id="el-header"></el-header>
      <el-container>
        <el-aside id="el-aside">
          <NavMenu></NavMenu>
        </el-aside>
        <el-main class="views-main-el-main">
          <div class="path-cont">
            <span>当前位置 : </span>
          </div>
          <div class="views-main-content">
            <router-view :dateTime='dateTime'></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '../../public/navMenu.vue'
export default {
  components: {
    NavMenu
  },
  data () {
    return {
      dateTime: new Date().getTime() // 每次点击搜索出现的时间戳
    }
  },
  methods: {}
}
</script>
<style>
#el-header {
  height: 60px;
  background-color: #3f3a8a;
  overflow: hidden;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-right: 2%;
}

#el-aside {
  width: 150px !important;
  min-height: 885px;
}

.views-main-el-main {
  position: relative;
  min-height: 100%;
  padding: 0;
  background-color: #f7f8fa;
}

.views-main-content {
  margin: 40px 165px 40px 66px;
  padding: 30px 30px 30px 50px;
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
  min-height: 800px;
  box-sizing: border-box;
}

.path-cont {
  position: absolute;
  width: 50%;
  height: 30px;
  line-height: 30px;
  top: 8px;
  left: 66px;
  font-size: 16px;
  font-weight: bold;
  color: #3f3a8a;
}
</style>
