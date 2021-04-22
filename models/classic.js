import { HTTP } from '../utils/http'

class ClassicModel extends HTTP {

  // 获取最新一期期刊
  getLatest(cb) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        // 请求成功，执行传入的回调函数
        cb(res)
        this._setLatestIndex(res.data.index)
      }
    })
  }

  /**
   * 获取当前一期的上一期期刊 / 下一期期刊
   * @param {Number} index 
   * @param {fun} cb 
   */
  getClassic(index, nextOrPrevious, cb) {
    this.request({
      url: `/classic/${index}/${nextOrPrevious}`,
      success: (res) => {
        cb(res)
      }
    })
  }


  // 判断期刊是否是第一期
  isFirst(index) {
    return index === 1 ? true : false
  }

  // 判断期刊是否是最新一期
  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }

  // 将最新一期的期刊号存入缓存
  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }
  // 从缓存中取出 
  _getLatestIndex() {
    let index = wx.getStorageSync('latest')
    return index
  }

}

module.exports = {
  ClassicModel
}