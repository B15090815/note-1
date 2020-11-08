//
import BASE_URL from '../config/api'
import axios from 'axios'

const config = {
  baseURL: BASE_URL,
  timeout: 1000 * 10,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
}
export default axios.create(config)
