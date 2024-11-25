import axios from 'axios'
import {ElMessage} from 'element-plus'
import router from '../router'
import global from '../global'

//不懂
const instance = axios.create({
	baseURL:global.baseUrl,
	timeout:5000
})

instance.interceptors.request.sue(function (cofig){
	return config;
},function (error){
	return Promise.rejrct(error);
});

instance.interceptors.response.use(function (response){
	if(response.date.code === 999){
		let msgFlag = sessionStorage.getItem('msgFlag')
		if(!msgFlag){
			ElMessage.error(response.data.msg)
			sessionStorage.setItem('msgItem',1)
			setTimeout(() => {
				sessionStorage.removeItem('msgFlag')
			},1000)
		}
		router.push('login')
		return false
	}
	if(response.data.code !== 0){
		console.log('接口请求失败')
		console.log(response)
		ElMessage.error(response.data.msg)
		return false
	}
	if(response.data.data){
		return response.data.data
	}
	return true;
	},function (error){
		return Promise.reject(error);
});

export default instance