Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageaddress:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var imgaddress = options.imgaddress;
    var image = imgaddress;
    this.setData({
      "imageaddress": options.imgaddress
    }),
    console.log(options.imgaddress)
  },

  /**
   * 预览图片
   */
  previewImageFun: function (e) {
    var current = e.target.dataset.src;
    //var tempFilePaths = e.tempFilePaths
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      //urls: this.data.imgalist // 需要预览的图片http链接列表http://photocdn.sohu.com/20110926/Img320589889.jpg

      urls: this.data.imgaddress,
      success: function (res) {
        console.log('预览图片成功')
      },
      fail: function (res) {
        console.log('预览图片失败')
      }
    })
  }
})