const app = getApp()
Component({
    data: {
        navBarHeight: app.globalData.navBarHeight,
        menuRight: app.globalData.menuRight,
        menuTop: app.globalData.menuTop,
        menuHeight: app.globalData.menuHeight,
    },
    methods: {
        navTo() {
            wx.navigateTo({
              url: '/pages/search/search',
            })
        }
    }
})