import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data
}

const save = async (content)=>{
    const response = await axios.post(baseUrl, {content, votes:0})
    return response.data
}

const update = async (data)=>{
    const response = await axios.put(`${baseUrl}/${data.id}`, data)
    return response.data
}

export default { getAll, save , update}