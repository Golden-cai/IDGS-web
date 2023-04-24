import { createStore } from 'vuex'
import userModule from "./user";

export default createStore({
  state:{
    loginStatus: true,
    selectedHospital: null
  },
  getters:{

  },
  mutations:{
    selectHospital (state, payload) {
      state.selectedHospital = payload
    }
  },
  actions:{

  },
  modules:{
    user: userModule
  }
})


