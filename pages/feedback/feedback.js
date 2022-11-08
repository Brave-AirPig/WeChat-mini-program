// pages/feedback/feedback.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
// 表单
formSubmit(e) {
if(e.detail.value.feedback.trim()) {
    // 模拟服务端请求时间
    wx.showModal({
        cancelColor: 'dd',
        cancelColor:'#eb0c0c',
        title:"您确认提交此反馈吗",
        success: res => {
          if (res.confirm) {
              wx.showLoading({
                  title:'正在提交',
                  mask: true,
                  success() {
                    setTimeout(function () {
                        wx.hideLoading()
                        console.log(e.detail.value.feedback)
                      }, 1000)
                  }
              })
            }
        }
    })
} else {
    wx.showToast({
      title: '请先输入内容',
      icon:'error'
    })
}
},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})