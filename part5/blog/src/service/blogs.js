import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const data = axios.get(baseUrl)
  return data.then(resp => resp.data)
}

const create = async blog => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, blog, config)
  return response.data
}

const update = async blog => {
  const config = {
    headers: { Authorization: token }
  }
  try{
    const response = await axios.put(`${baseUrl}/${blog.id}`, blog, config)
    return response.data
  }catch(event){
    return null
  }
}

const remove = async blog => {
  const config = {
    headers: { Authorization: token }
  }
  console.log(config)
  const response = await axios.delete(`${baseUrl}/${blog.id}`, config)
  return response.data
}

export default { getAll, create, setToken, update, remove }
