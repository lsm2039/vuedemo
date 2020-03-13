import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main/main.vue'
import DataPage from '@/views/datapage/datapage.vue'
import Project from '@/views/project/project.vue'
import Model from '@/views/model/model.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
      path: '/DataPage',
      name: 'DataPage',
      component: DataPage
    }, {
      path: '/Project',
      name: 'Project',
      component: Project
    }, {
      path: '/Model',
      name: 'Model',
      component: Model
    }]
  }]
})
