const APP = new getApp()
Component({
    data: {
        navBarHeight: APP.globalData.navBarHeight,
        menuRight: APP.globalData.menuRight,
        menuTop: APP.globalData.menuTop,
        menuHeight: APP.globalData.menuHeight,
    },
    methods: {
        navTo() {
            wx.navigateTo({
              url: '/pages/search/search',
            })
        }
    }
})