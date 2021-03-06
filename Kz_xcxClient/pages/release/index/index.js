var api = require('../../../utils/api.js')
Page({
  data: {
    animationData: {},
    list: [
      { text: "照明灯饰", src: "../../../../images/light.png", bg: "#38B89B" },
      { text: "商铺生意", src: "../../../../images/money.png", bg: "#F63B3C" },
      { text: "招聘求职", src: "../../../images/qiuzhi.png", bg: "#FA9F2C" },
      { text: "生活服务", src: "../../../images/house_server.png", bg: "#FD4E15" },
      { text: "二手买卖", src: "../../../images/two_handle.png", bg: "#FEA331" },
      { text: "房产租售", src: "../../../images/house.png", bg: "#F93B40" },
      { text: "拼车", src: "../../../images/car.png", bg: "#1FAEE9" },
      { text: "商务服务", src: "../../../images/server.png", bg: "#FD501B" },
      { text: "花木", src: "../../../images/flower.png", bg: "#2CA9F3" },
      { text: "教育培训", src: "../../../images/study.png", bg: "#30b699" }
    ],
    msg: '',
  },
  // 列表图标跳转详情页
  listClickTap: function (event) {
    var title = event.currentTarget.dataset.title;
    wx.navigateTo({
      url: '../edit/edit?title=' + title
    })
  },
  onLoad: function (){
    let that = this;
    api.post({
      url: 'home/index/index',
      success: data => {
        if (data.code == 1) {
          that.setData({
            msg: data.msg
          })
          wx.showToast({
            title: data.msg,
            icon: 'success',
            duration: 1000
          })
        }
        if (data.code == 0) {
          wx.showModal({
            content: data.msg,
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }
        console.log(data);
      }
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translateY(-140).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  
})