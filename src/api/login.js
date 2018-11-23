// import axios from 'axios'
import request from '@/utils/request'
import {getNewStr} from '../assets/js/public'

export function login(userInfo) {
  return request({
    url: getNewStr + '/UserInfo/Login',
    method: 'post',
    data: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

