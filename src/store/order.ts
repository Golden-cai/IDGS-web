import { fetchApi } from "@/http/fetchApi";

const orderModule = {
  state:{
    doctor: {
      doctorId: '',
      doctorName: '',
      doctorTitle: '',
      doctorImg: '',
    },
    department: {
      departmentId: '',
      departmentItemId: '',
      departmentItemName: '',
    },
    appointment: {
      shiftsRecordId: '',
      shiftsId: '',
      shiftsTime: '',
      shiftsRemainNumber: null,
      shiftsDay: null,
      shiftsTotalNumber: null,
      shiftsAmount: null
    }

  },
  getters:{

  },
  mutations:{
    updateDoctor(state, payload) {
      state.doctor.doctorId = payload.doctorId
      state.doctor.doctorName = payload.doctorName
      state.doctor.doctorTitle = payload.doctorTitle
      state.doctor.doctorImg = payload.doctorImg
    },
    updateDepartment(state, payload) {
      state.department.departmentId = payload.departmentId
      state.department.departmentItemId = payload.departmentItemId
      state.department.departmentItemName = payload.departmentItemName
    },
    updateAppointment(state, payload) {
      state.appointment.shiftsRecordId = payload.shiftsRecordId
      state.appointment.shiftsId = payload.shiftsId
      state.appointment.shiftsTime = payload.shiftsTime.substring(0, 10)
      state.appointment.shiftsRemainNumber = payload.shiftsRemainNumber
      state.appointment.shiftsDay = payload.shiftsDay
      state.appointment.shiftsTotalNumber = payload.shiftsTotalNumber
      state.appointment.shiftsAmount = payload.shiftsAmount
    }
  },
  actions:{

  },

  modules:{

  }
}

export default orderModule;
