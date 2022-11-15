const APP = new getApp()
import requestData from '../../utils/api'

Page({
    data: {
        userdata:{
            plan: 0,
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
            requestData.myRequest({ url:'/userMessage' })?.then(result => {
              this.setData({
                userdata: result.data[0]
              })
            })
          }
        })
    },
  // 页面跳转
  onShow() {
    APP.globalPageJump(this,()=>{
     this.getTabBar().setData({
       selected: 3
      })
    })
  },
onHide() {
 APP.globalPageJump(this,()=>{
   this.getTabBar().setData({
     btn_show: false
    })
  })
}
})