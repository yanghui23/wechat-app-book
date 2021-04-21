import { HTTP } from '../utils/http'

class ClassicModel extends HTTP {
  getLatest(cb) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        // 请求成功，执行传入的回调函数
        cb(res)
      }
    })
  }
}

module.exports = {
  ClassicModel
}