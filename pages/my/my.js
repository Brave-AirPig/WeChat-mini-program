Page({
    data: {
        userdata:{
            plan: 60,
            concern: 0,
            fans: 0,
            like: 0,
            integral:0
        },
        username: '用户名',
        avatarUrl: '../../images/people2.png',
        usershow: false,
        backImg: '../../images/swiper/2.jpg'
    },
    // 获取本地图片地址更新视图
    choImg() {
        wx.chooseMedia({
            count: 1,
            success: res => {
                this.setData({
                    backImg: res.tempFiles[0].tempFilePath
                }) 
            }
        })
    },
    getUserInfo(e) {
        // 登录获取用户信息
        wx.getUserProfile({
          desc: '授权胶囊星球小程序',
          success: res => {
              this.setData({
                  usershow: true,
                  username: res.userInfo.nickName,
                  avatarUrl: res.userInfo.avatarUrl
              })
            // 用户获取信息成功进行ajax请求模拟数据
              wx.request({
                url: 'https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example/userMessage',
                success: res => {
                    this.setData({
                        userdata:res.data[0]
                    })
                }
              })
          }
        })
    },
    onLoad() {

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
        // 如果有这个方法并且调用 getTabbar 可以调用这个实例
        if(typeof this.getTabBar == 'function' && this.getTabBar()) {
            this.getTabBar().setData({
            // 第一页
            selected: 3
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