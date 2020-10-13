//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    year:'2018',
    month:'02',
    day:'01',
    history:[
      { date: '2012-05-02', time: '12:25', course: 'xx', number: 100 },
      { date: '2020-02-07', time: '11:00', course: 'yy', number: 250 },
      { date: '2020-02-07', time: '12:00', course: 'yy', number: 250 },
      { date: '2020-02-07', time: '14:00', course: 'yy', number: 250 }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow: function(){
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
      //获取时间
      var timestamp = Date.parse(new Date());
      var date = new Date(timestamp);
      this.setData({
        year: date.getFullYear(),
        month : (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
        day : date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      })
  },
  conlog_text:function(){
    wx.navigateTo({
      url: '../his_detail/his_detail',
    })
    console.log("success_link!")
  }
})

