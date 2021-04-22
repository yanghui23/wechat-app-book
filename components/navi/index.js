// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    // 当前期刊是否是第一期
    first: Boolean,
    // 当前期刊是否是最新一期
    latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 向左切换
    onLeft: function(e) {
      if(!this.properties.latest) {
        this.triggerEvent('left', {})
      }
    },

    // 向右切换
    onRight: function(e) {
      if(!this.properties.first) {
        this.triggerEvent('right', {})
      }
    }
  }

})
