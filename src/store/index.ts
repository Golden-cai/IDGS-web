import { createStore } from 'vuex'
import userModule from "./user";
import orderModule from "./order";

export default createStore({
  state:{
    loginStatus: true,
    selectedHospital: {
      hospitalId: '',
      hospitalName: ''
    }
  },
  getters:{

  },
  mutations:{
    selectHospital (state, payload) {
      state.selectedHospital.hospitalId = payload.hospitalId
      state.selectedHospital.hospitalName = payload.hospitalName
    }
  },
  actions:{

  },
  modules:{
    user: userModule,
    order: orderModule
  }
})


