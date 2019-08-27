import axios from 'axios'
export const GetComments = () => {
  return axios.get('https://jsonplaceholder.typicode.com/comments')
}

export const Authen = (username, password) => {
  return axios.get('http://staging-truck-gw.ghn.vn/api/v1/public/user/login/admin', {
    phone: username,
    password
  })
}
