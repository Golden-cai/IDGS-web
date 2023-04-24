import instance from './axios';
import urls from '../common/urls'

export const  fetchApi = (name, params=null, pathParam = '') => {
  let url = urls[name]
  return instance({
    method: url.method,
    url: url.path + pathParam,
    params
  })

  // let url = urls[router]
  // let result
  // switch(url.method) {
  //   case "get":
  //     console.log(url)
  //     return instance.get(url.path, params)
  //     break;
  //   case "post":
  //     result = instance.post(url.path, params)
  //   default:
  //     break;
  // }
  // return result;
}
