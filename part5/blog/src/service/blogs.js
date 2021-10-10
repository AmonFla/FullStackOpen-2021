import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = ()=>{
    const data = axios.get(baseUrl)
    return data.then(resp=>resp.data)
}

export default {getAll}