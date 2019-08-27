import axios from 'axios'
export const GetComments = () => {
  return axios.get('https://jsonplaceholder.typicode.com/comments')
}
