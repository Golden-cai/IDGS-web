const appStore = {
    state () {
      return {
        isLogin: false,
        choseHospital: null
      }
    },
    getters: {
      doSomeThing (state) {

      }
    },
    mutations: {
      increment (state, payload) {
        state.count += payload
      }
    },
    actions: {
      
    }
  }

  export default appStore;