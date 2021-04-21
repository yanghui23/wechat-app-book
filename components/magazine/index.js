
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: ''
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
