const APP = new getApp()
const $url = 'https://mock.mengxuegu.com/mock/6362115cffa946598c7427b3/example'

const myRequest = function(option) {
	wx.showLoading({
	  title: '数据加载中...',
	})
	return new Promise(async (resolve,reject)=> {
		wx.request({
		  url: $url + option.url,
		  method: option.method || "GET",
		  data: option || {},
		  header: {
			  Authorization: wx.getStorageSync('token') || ''
		  },
			success(res) {
			if(res.statusCode === 200) resolve(res)
		  	},
		  	fail: err => {
			  wx.showToast({
				title: '接口请求失败',
				icon: "error",
				duration: 1500
			  })
			  reject(err)
		  },
		  complete() {
			  wx.hideLoading()
		  }
		})
	})
}

export default {
	$url,
	myRequest
}