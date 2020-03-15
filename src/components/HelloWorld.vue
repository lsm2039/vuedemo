<template>
  <div class="hello">
    <hr>
    <el-button
      type="primary"
      plain
      @click="addFn"
    >add + +</el-button>
    <el-button
      type="info"
      plain
      @click="minusFn"
    >minus - -</el-button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { INCREMENT, DECREMENT } from '../public/store/mutations_type'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT']),
    ...mapActions(['myIncrement', 'myDecrement']),
    async addFn () {
      // this.myIncrement()
      this.$store.commit(INCREMENT, 2)
      // this.$store.state.count = '数据'
      // const getData = await this.myIncrement({
      //   'id': 1234
      // })
      // console.log(getData)
    },
    minusFn () {
      // this.myDecrement()
      this.$store.commit(DECREMENT, 1)
      // this.$store.state.count = '模型'
    }
  }
}
</script>
