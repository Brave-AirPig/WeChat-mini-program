// pages/sign/sign.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        signDate: 0,
        percent: 0,
        disabled: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 每日中午 12 点进行一个长达一小时的签到活动
        if (new Date().getHours() === 12) {
            wx.setStorageSync('signDisabled', false)
        }
        const date = wx.getStorageSync('signDate')
        if(date) {
            this.setData({
                signDate: date,
                percent: date * 10,
                disabled: wx.getStorageSync('signDisabled')
            })
        } else {
            wx.setStorageSync('signDate', 0)
        }
    },
    // 点击签到事件
    signAdd() {
        if(Number(wx.getStorageSync('signDate')) === 10) {
            wx.setStorageSync('signDate',0)
            this.setData({
                signDate: date,
                percent: date * 10
            })
        }

        wx.setStorageSync('signDate', Number(wx.getStorageSync('signDate')) + 1)
        const date = wx.getStorageSync('signDate')
        wx.setStorageSync('signDisabled', true)
        this.setData({
            signDate: date,
            percent: date * 10,
            disabled: true
        })
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