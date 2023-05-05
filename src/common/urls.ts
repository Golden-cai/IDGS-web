const urls = {
    // 查询所有医院
    queryHospitalList: {
        path: '/controller/hospital/query-all-hospital',
        method: 'get',
        params: '',
    },
    // 查询医院的科室信息
    queryDepartmentList: {
        path: '/controller/hospital/query-all-department/',
        method: 'get',
        params: '',
    },
    // 查询科室下的班次信息
    queryDoctorShifts: {
      path: '/controller/shifts/query-all-shifts/',
      method: 'get',
      params: '',
    }

}

export default urls
