Component({
  data: {
    btn_show: false,
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#f4af0c",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/images/home_no.png",
      selectedIconPath: "/images/home.png",
      text: "主页"
    }, {
      pagePath: "/pages/plate/plate",
      iconPath: "/images/plate_no.png",
      selectedIconPath: "/images/plate.png",
      text: "板块"
    }, {
      pagePath: "/pages/shop/shop",
      iconPath: "/images/shop_no.png",
      selectedIconPath: "/images/shop.png",
      text: "星球背包"
    }, {
      pagePath: "/pages/my/my",
      iconPath: "/images/my_no.png",
      selectedIconPath: "/images/my.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
    },
    btnSwitch() {
      this.setData({
        btn_show: !this.data.btn_show
      })
    },
    // 路由跳转
    navto(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.path,
      })
    }
  }
})