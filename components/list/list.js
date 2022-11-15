import requestData from '../../utils/api'

Component({
    properties: {
        list: {
            type: Array,
            value: []
        }
    },
    created() {
        requestData.myRequest({ url:'/choicest' })?.then(result => {
            this.setData({
                list: result.data.list
            })
        })
    }                                                    
})
