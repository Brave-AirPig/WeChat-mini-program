Page({
  data: {
    swiperList:[
      {
        id:1,
        url:'../../images/swiper/1.jpg'
      },
      {
        id:2,
        url:'../../images/swiper/2.jpg'
      },
      {
        id:3,
        url:'../../images/swiper/3.jpg'
      },
      {
        id:4,
        url:'../../images/swiper/4.jpg'
      },
      {
        id:5,
        url:'../../images/swiper/5.jpg'
      },
    ],
    imgNum:1,
    hotNewsList:[],
    navShow:false,
  },
  // 页面跳转
  navTo(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
    })
  },
  // 监听轮播图事件
  swiperFunc(e) {
    this.setData({
      imgNum: e.detail.current + 1
    })
  },
  onLoad() {
    // 热门话题
    wx.request({
      url: 'https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example/hotNews',
      success: res=> {
        this.setData({
          hotNewsList: res.data.list
        })
      },
      fail: err=> {
        console.log(err)
      }
    })
  },
  onShow() {
    // 如果有这个方法并且调用 getTabbar 可以调用这个实例
    if(typeof this.getTabBar == 'function' && this.getTabBar()) {
       this.getTabBar().setData({
       // 第一页
        selected: 0
       })
     }
   },
 onHide() {
  if(typeof this.getTabBar == 'function' && this.getTabBar()) {
    this.getTabBar().setData({
        btn_show: false
    })
  }
 }
})
