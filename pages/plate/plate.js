const APP = new getApp()
import requestData from '../../utils/api'

Page({
    data: {
        programmingList: [],
        acive: 0,
        plateSelectList:[
          {
            id: 0,
            title: '程序员星球'
          },
          {
            id: 1,
            title: '金融星球'
          },
          {
            id: 2,
            title: '其他星球'
          }
        ]
    },
    selectFunc(url) {
      requestData.myRequest({ url:url })?.then(result => {
        this.setData({
          programmingList: result.data.list
        })
    })
    },
      // 监听选项卡切换点击事件
      selectShowFunc(e) {
        this.setData({
          acive: e.currentTarget.dataset.type
        })
      // 选项卡列表切换
      switch(e.currentTarget.dataset.type) {
        case 0:
          this.selectFunc('/programmingStar')
          break;
        case 1:
          this.selectFunc('/moneyStar')
          break;
        case 2:
          this.selectFunc('/otherStar')
          break;
        default:
          wx.showToast({
            title: '无效选项卡跳转',
            icon: 'error',
            duration: 1500
          })
      }
      },
    onLoad(options) {
        this.selectFunc('/programmingStar')
    },
  // 页面跳转
  onShow() {
    APP.globalPageJump(this,()=>{
     this.getTabBar().setData({
       selected: 1
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