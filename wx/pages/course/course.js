Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  methods:{
    tap2sign:function(){
      console.log("link to lhj's pages")
      wx.navigateTo({
        url: '../sign/sign',
      })
    }
  }
})
