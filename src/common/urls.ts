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
    },
   // 登录获取用户信息
   login: {
     path: '/controller/user/query-user-info/',
     method: 'get',
     params: '',
   },
  // 创建订单
  createOrder: {
    path: '/controller/order/create-order',
    method: 'post',
    params: '',
  }


}

export default urls
