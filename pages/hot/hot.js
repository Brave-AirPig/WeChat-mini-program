import requestData from '../../utils/api'

Page({
    data: {
        list: []
    },
    onLoad(options) {
        requestData.myRequest({ url:'/hot' })?.then(result => {
            this.setData({
              list: result.data.list
            })
          })
    },
})