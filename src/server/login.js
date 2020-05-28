import axios from 'axios'
import { message } from 'antd'

export const HttpLogin = (url, data) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'Authorization': '',
            },
            withCredentials:false,
            url: url,
            data:data,
            timeout:10000,
        }).then((res) => {
            if (res && res.status == '200' ) {
                resolve(res.data)
            }
        }).catch(() => {
            message.warn('网络连接错误')
            reject()
        })
    })
}