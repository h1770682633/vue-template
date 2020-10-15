import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API|'', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;

    if (res.status !== 1) {
      console.log("系统错误，请稍后再试");

      if (res.status == 2) {
        // to re-login
        console.log("您的登录态已过期，请重新登录")
        //后面执行重新登陆操作
      }
    }
      return res;
  },
  error => {
    console.log("err----" + error); // for debug
    let msg = error.message;
    if (error.message.indexOf("Network Error") > -1) {
      msg = "服务器连接失败，请稍后再试";
    }
    if (error.message.indexOf("timeout of") > -1) {
      msg = "服务器连接超时，请稍后再试";
    }
    console.log(msg)
    return Promise.reject(error);
  }
);


// 请求封装
export default {
  /**
   * get方法，对应get请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  get(url, params) {
    return new Promise((resolve, reject) => {
      service({
        url,
        method: "get",
        params
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * post方法，对应post form-urlencoded请求，用来提交表单数据
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  post(url, data) {
    return new Promise((resolve, reject) => {
      service({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        url,
        method: "post",
        // data: qs.stringify(data)
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * postFormData方法，对应post请求，用来处理文件上传
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  postFormData(url, data) {
    return new Promise((resolve, reject) => {
      service({
        headers: {
          "Content-Type": "multipart/form-data"
        },
        url,
        method: "post",
        data
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
