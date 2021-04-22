
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      // 不要在observe函数中修改属性中的值，会导致无限递归，堆栈溢出
      observer: function(newVal, oldVal, cahngePath) {
        let value = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: value
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _index: '',
    year: 0,
    month: '',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  /**
   * 组件生命周期
   */
  lifetimes: {
    created: function() {
      // 在组件实例刚刚被创建时执行
    },

    attached: function() {
      // 在组件实例进入页面节点树时执行
      let year = new Date().getFullYear()
      let month = new Date().getMonth()

      this.setData({
        year: year,
        month: this.data.months[month]
      })
    },

    ready: function() {
      // 在组件在视图层布局完成后执行
    },

    moved: function() {
      // 在组件实例被移动到节点树另一个位置时执行
    },

    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },

  },
  
})
