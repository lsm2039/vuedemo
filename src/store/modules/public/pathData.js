export default {
  state: {
    show: false
  },
  getters: {
    not_show(state) {//这里的state对应着上面这个state
      return !state.show;
      /**
       * 
       * 我们在组件中使用 $store.state.dialog.show 来获得状态 show , 
       * 类似的, 我们可以使用 $store.getters.not_show 来获得状态 not_show 。
       * */
    }
  },
  mutations: {
    switch_dialog(state) { //这里的state对应着上面这个state
      state.show = state.show ? false : true;
      //你还可以在这里执行其他的操作改变state
      /**
       * 使用 $store.commit('switch_dialog') 来触发 mutations 中的 switch_dialog 方法。
          这里需要注意的是:
          mutations 中的方法是不分组件的 , 假如你在 dialog_stroe.js 文件中的定义了
          switch_dialog 方法 , 在其他文件中的一个 switch_dialog 方法 , 那么
          $store.commit('switch_dialog') 会执行所有的 switch_dialog 方法。
          mutations里的操作必须是同步的
       * 
       * 
       * */
    }
  },
  actions: {
    switch_dialog(context) {//这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switch_dialog');
      //你还可以在这里触发其他的mutations方法
      /**
       * 使用 $store.dispatch('switch_dialog') 来触发 action 中的 switch_dialog 方法。
       * */
    }
  }
  /***
   * 很多时候 , $store.state.dialog.show 、$store.dispatch('switch_dialog') 这种写法又长又臭 , 很不方便 , 
   * 我们没使用 vuex 的时候 , 获取一个状态只需要 this.show , 执行一个方法只需要 this.switch_dialog 就行了 , 使用 vuex 使写法变复杂了 ?
   * 使用 mapState、mapGetters、mapActions 就不会这么复杂了。
   * ...mapState({
    *  show:state=>state.dialog.show
   * }),
   * mapGetters、mapActions 和 mapState 类似 , mapGetters 一般也写在 computed 中 , mapActions 一般写在 methods 中。
   * 
   **/

}