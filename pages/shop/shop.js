const APP = new getApp()
import requestData from '../../utils/api'

// 定义切片起始位置
let slice_num = 0;
// 定义默认数组
let arrList = []

Page({
    data: {
        imgList: []
    },
    requestAjax() {
      requestData.myRequest({ url:'/images' })?.then(result => {
        if(slice_num > result.data.list.length) return
        arrList.push(...result.data.list.slice(slice_num,10 + slice_num))
        this.setData({
            imgList:  arrList
        })
        slice_num = slice_num + 10
      })
    },
    // 上拉加载
    getOnBottom () {
        this.requestAjax()
    },
    onLoad(options) {
        this.requestAjax()
    },
  // 页面跳转
  onShow() {
    APP.globalPageJump(this,()=>{
     this.getTabBar().setData({
       selected: 2
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