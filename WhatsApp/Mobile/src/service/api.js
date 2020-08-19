  
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://8b9419e20b22.ngrok.io/'
})

export default api