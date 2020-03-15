<template>
  <div id="app">
    <h1>{{count}}</h1>
    <h2>{{myCount}}</h2>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      count: state => {
        return state.app.count
      }
    }),
    ...mapGetters(['myCount'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
