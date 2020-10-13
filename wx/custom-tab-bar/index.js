 // template/template.js
Component({
  data: {
    selected: 1,
    isOpen: 0,
    color: "#82cb33",
    selectedColor: "#82cb33",
    list: [{
      pagePath: "/pages/course/course",
      iconPath: "/images/all.png",
      selectedIconPath: "/images/all-fill.png",
      text: "Task"
    }, 
    {
      pagePath: "/pages/index/index",
      iconPath: "/images/integral.png",
      selectedIconPath: "/images/integral-fill.png",
      text: "History"
    },
    {
      pagePath: "/pages/mine/mine",
      iconPath: "/images/bussiness-man.png",
      selectedIconPath: "/images/bussiness-man-fill.png",
      text: "Mine" 
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }

})