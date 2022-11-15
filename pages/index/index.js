const APP = new getApp()
import requestData from '../../utils/api'
Page({
  data: {
    // 轮播图
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
    // 选项卡
    selectList:[
      {
        id: 0,
        title:'每日签到',
        navPath: '/pages/sign/sign',
        image: '../../images/sign.png'
      },
      {
        id: 1,
        title:'热门精选',
        navPath: '/pages/hot/hot',
        image: '../../images/hot.png'
      },
      {
        id: 2,
        title:'活动专区',
        navPath: '/pages/activity/activity',
        image: '../../images/active.png'
      },
      {
        id: 3,
        title:'意见反馈',
        navPath: '/pages/feedback/feedback',
        image: '../../images/feed.png'
      }
    ],
    selectTitleList:[
      {
        id: 0,
        title: '精选'
      },
      {
        id: 1,
        title: '最新'
      },
      {
        id: 2,
        title: '关注'
      }
    ],
    imgNum:1,
    hotNewsList:[],
    navShow:false,
    selectShow: 0,
    list:[]
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
    requestData.myRequest({ url:'/hotNews' })?.then(result => {
      this.setData({
        hotNewsList: result.data.list
      })
    })
  },
  // 页面跳转
  onShow() {
     APP.globalPageJump(this,()=>{
      this.getTabBar().setData({
        selected: 0
       })
     })
   },
 onHide() {
  APP.globalPageJump(this,()=>{
    this.getTabBar().setData({
      btn_show: false
     })
   })
 },
 selectFunc(url) {
  requestData.myRequest({ url:url })?.then(result => {
    this.setData({
        list: result.data.list
    })
})
},
  // 监听选项卡切换点击事件
  selectShowFunc(e) {
    this.setData({
      selectShow: e.currentTarget.dataset.idtype
    })
  // 选项卡列表切换
  switch(e.currentTarget.dataset.idtype) {
    case 0:
      this.selectFunc('/choicest')
      break;
    case 1:
      this.selectFunc('/newNews')
      break;
    case 2:
      this.selectFunc('/starNews')
      break;
    default:
      wx.showToast({
        title: '无效选项卡跳转',
        icon: 'error',
        duration: 1500
      })
  }
  }
})
