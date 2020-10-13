// pages/sign/sign.js
var intcount = 0
Page({
  data: {
    tempFilePaths: '',
    imgwidth: 0,
    imgheight: 0,
    viewHeight: 0,
    intcount:0
  },
  onLoad: function () {
    var screenHeight = wx.getSystemInfoSync().windowHeight;
    var viewHeight = 0.25 * screenHeight;
    this.setData({
      "viewHeight": viewHeight
    })
  },

  tap2upload: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['上传图片'],
      itemColor: '',
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
          if (res.tapIndex == 0) {

            wx.chooseImage({
              count: 1,
              sizeType: ['original', 'compressed'], //可选择原图或压缩图
              sourceType: ['album', 'camera'], //可选择相册或相机
              success: function (res) {
                var tempFilePaths = res.tempFilePaths
                console.log('选择的图片路径为：', tempFilePaths)
                that.setData({
                  "tempFilePaths": tempFilePaths,
                })
                /*wx.uploadFile({
                  url:'/sign_img/sign_img',
                  filePath: tempFilePaths,
                  name:'sign_img',
                  formData:null,
                  success: function (res) {
                    var data = res.data
                    console.log("!!!!!")
                  },
                  fail:function(res){
                    console.log(res.data)
                  }
                })*/

                //wx.navigateTo({
                //url: '../upload/upload?imgaddress='+tempFilePaths,
                //})
              },
              fail: function (res) {
                console.log('接口调用失败', res)
              }
            })

          }
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  imageLoad: function (e) {
    var $width = e.detail.width,  //获取图片真实宽度
      $height = e.detail.height,
      ratio = $height / $width;  //图片的真实宽高比例
    var screenHeight = wx.getSystemInfoSync().windowHeight;
    var viewHeight = 0.25 * screenHeight,      //设置图片显示宽度，
      viewWidth = viewHeight / ratio;  //计算的高度值
    this.setData({
      imgwidth: viewWidth,
      imgheight: viewHeight
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    //image: "../../images/kbbg.jpg",
    xueqi: ['2020年春季学期', '2020年秋季学期', '2021年春季学期'],
    selectedXueqiIndex: 0,
    zhoushu: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
    selectedZhoushuIndex: 0,

    sch_listData: [],
    dateArray: [],
    msg: '数据',

  },

  /*选择学期周数*/
  selectChange: function (e) {
    console.log(e)
    //通过事件对象e.detail.value，获取用户选择的range数组的第几个索引值
    this.setData({
      selectedXueqiIndex: e.detail.value
    })
  },

  selectChange2: function (e) {
    console.log(e)
    //通过事件对象e.detail.value，获取用户选择的range数组的第几个索引值
    this.setData({
      selectedZhoushuIndex: e.detail.value
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '【签到小程序】课堂点名，自习室座位情况随时查看~',
      desc: '给你推荐一个超级方便的课堂点名小程序！',
      path: 'pages/index/index'
    }
  },

  up2python:  function (e) {
        var  _this  =  this;
        console.log("?" + this.data.tempFilePaths[0])
        wx.showToast({
            title:  '图片提交中',
            icon: 'loading',
            duration: 6000
        })
        wx.uploadFile({
            url:  'http://127.0.0.1:8000/regc/regc/',
            filePath:  this.data.tempFilePaths[0],
            name:  'upload_img',
            success:  function  (e)  {
                //var json = JSON.parse(e.data)  // 此处转换   
                intcount  =  e.data
                wx.hideToast()
                console.log(e.data)
            },
            complete: function (e) {
                /*修改人数*/
                _this.setData({
                    intcount:  intcount
                })
            }
        })
    }
})