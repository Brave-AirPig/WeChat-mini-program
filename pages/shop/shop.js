// 定义切片起始位置
let slice_num = 0;
// 定义默认数组
let arrList = []

Page({
    data: {
        imgList: []
    },
    requestAjax() {
        wx.showLoading({
            title: '加载中...',
        })
        wx.request({
          url: 'https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example/images?',
          success: res => {
            if(slice_num > res.data.list.length) return
            arrList.push(...res.data.list.slice(slice_num,10 + slice_num))
            this.setData({
                imgList:  arrList
            })
            slice_num = slice_num + 10
          },
          complete() {
            wx.hideLoading({ })
          }
        })
    },
    // 上拉加载
    getOnBottom () {
        this.requestAjax()
    },
    onLoad(options) {
        this.requestAjax()
    },
    onReady() {

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        // 如果有这个方法并且调用 getTabbar 可以调用这个实例
        if(typeof this.getTabBar == 'function' && this.getTabBar()) {
            this.getTabBar().setData({
            // 第一页
            selected: 2
            })
        }
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        if(typeof this.getTabBar == 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                btn_show: false
            })
        }
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