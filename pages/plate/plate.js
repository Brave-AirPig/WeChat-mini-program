Page({
    data: {
        programmingList: [],
        acive: 0
    },
    aciveFunc(e) {
        this.setData({
            acive: e.currentTarget.dataset.type
        })
        if(e.currentTarget.dataset.type == 0) {
            this.myAjax('https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example/programmingStar')
        } else if(e.currentTarget.dataset.type == 1) {
            this.myAjax('https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example/moneyStar')
        } else if(e.currentTarget.dataset.type == 2) {
            this.myAjax('https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example/otherStar')
        }
    },
    // 封装请求
    myAjax(url) {
        wx.showLoading({
          title: '正在加载...'
        })
        wx.request({
            url: url,
            success: res => {
                this.setData({
                    programmingList: res.data.list
                })
                wx.hideLoading({ })
            }
          })
    },
    onLoad(options) {
        this.myAjax('https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example/programmingStar')
    },
    onReady() {

    },
    onShow() {
        // 如果有这个方法并且调用 getTabbar 可以调用这个实例
        if(typeof this.getTabBar == 'function' && this.getTabBar()) {
            this.getTabBar().setData({
            // 第一页
            selected: 1
            })
        }
    },
    onHide() {
        if(typeof this.getTabBar == 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                btn_show: false
            })
        }
    },
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