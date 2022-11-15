App({
    onLaunch(options) {
        // 获取系统信息
        const systemInfo = wx.getSystemInfoSync();
        // 胶囊按钮位置信息
        const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
        // 导航栏高度 = 状态栏高度 + 44
        this.globalData.navBarHeight = systemInfo.statusBarHeight + 44;
        this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
        this.globalData.menuTop=  menuButtonInfo.top;
        this.globalData.menuHeight = menuButtonInfo.height;
    },
    // 数据都是根据当前机型进行计算，这样的方式兼容大部分机器
    globalData: {
        navBarHeight: 0, // 导航栏高度
        menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
        menuTop: 0, // 胶囊距底部间距（保持底部间距一致）
        menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
    },
    globalPageJump(_this,status){
        // 如果全局有这个方法并且调用 getTabbar 可以调用这个实例
        if(typeof _this.getTabBar == 'function' && _this.getTabBar()) {
            status()
        }else {
            throw new Error("该页面并没有跳转业务")
        }
    }
})