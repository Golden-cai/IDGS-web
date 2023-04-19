const appStore = {
    state () {
      return {
        isLogin: false,
        selectHospital: null
      }
    },
    getters: {
      getHospital(state) {
        return state.selectHospital
      }
    },
    mutations: {
      selectHospital (state, payload) {
        state.selectHospital = payload
      }
    },
    actions: {

    }
  }

  export default appStore;
