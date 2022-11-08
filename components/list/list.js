// components/list/list.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        list:[],
        selectShow: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        selectFunc(url) {
            wx.showLoading({
              title: '正在加载数据...',
            })
            wx.request({
                url: url,
                success: res => {
                    this.setData({
                        list: res.data.list
                    })
                    wx.hideLoading({
                    
                    })
                }
            })
        },
        // 监听选项卡切换点击事件
        selectShowFunc(e) {
            this.setData({
            selectShow: e.currentTarget.dataset.idtype
            })
            // 选项卡列表切换
            if(e.currentTarget.dataset.idtype == 0) {
                this.selectFunc('https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example/choicest')  
            }else if(e.currentTarget.dataset.idtype == 1) {
                this.selectFunc('https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example/newNews')  
            }else if(e.currentTarget.dataset.idtype== 2) {
                this.selectFunc('https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example/starNews')  
            } 
        }
    },
    // 组件监听事件
    observers() {
                                                          
    },
    created() {
        wx.request({
            url: 'https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example/choicest',
            success: res => {
                this.setData({
                    list: res.data.list
                })
            }
        })
    }                                                              
})
