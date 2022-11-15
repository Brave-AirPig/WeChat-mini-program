import requestData from '../../utils/api'

Page({
    data: {
        list: []
    },
    onLoad(options) {
        requestData.myRequest({ url:'/activity' })?.then(result => {
            this.setData({
              list: result.data.list
            })
          })
    },
})