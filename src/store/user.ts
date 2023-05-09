import {fetchApi} from "@/http/fetchApi";

const userModule = {
  state:{
    userId: '',
    userTel: '',
    userName: '',
    userGender: '',
    userBirth: '',
    userIdCard: '',
    userEmail: '',
    userAddress: '',
    userPhoto: '',
    userSession: ''
  },
  getters:{

  },
  mutations:{
    updateUser(state, payload) {
      state.userId = payload.userId,
      state.userTel = payload.userTel,
      state.userName = payload.userName,
      state.userGender = payload.userGender,
      state.userBirth = payload.userBirth,
      state.userIdCard = payload.userIdCard,
      state.userEmail = payload.userEmail,
      state.userAddress = payload.userAddress,
      state.userPhoto = payload.userPhoto
    },
    logOut(state) {
      state.userId = '',
      state.userTel = '',
      state.userName = '',
      state.userGender = '',
      state.userBirth = '',
      state.userIdCard = '',
      state.userEmail = '',
      state.userAddress = '',
      state.userPhoto = '',
      state.userSession = ''
    }
  },
  actions:{
    login: async (context, payload) => {
      let result = await fetchApi('login', '', payload.tel + '/' + payload.pass)
      if (result?.data !== null) {
        context.commit('updateUser', result.data)
      }
     }
    },
  modules:{

  }
}

export default userModule;
