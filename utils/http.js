import { config } from '../config'

// 错误码对应的提示信息对象
const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appkey无效，请前往申请',
  3000: '期刊不存在'
}

// http请求类
class HTTP {
  // 统一请求方法，接收一个参数：params对象
  request(params) {
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: config.baseURL + params.url,
      method: params.method,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      // 将数据保存到data中，发送到后端
      data: params.data,
      // 请求成功回调
      success: (res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success && params.success(res)
        } else {
          let err_code = res.data.error_code
          this._show_err(err_code)
        }
      },
      // 请求失败的回调
      fail: (err) => {
        this.err_code(1)
      }
    })
  }

  // 统一错误提示方法
  _show_err(err_code) {
    if (!err_code) {
      err_code = 1
    }
    wx.showToast({
      title: tips[err_code],
      icon: 'none',
      duration: 2000
    })
  }

}

module.exports = {
  HTTP
}