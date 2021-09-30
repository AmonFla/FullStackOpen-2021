import axios from 'axios' 
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(resp => resp.data)

const createPerson = (newPerson) => axios.post(baseUrl, newPerson).then(resp=>resp.data)

const deletePerson = (id) => axios.delete(`${baseUrl}/${id}`).then(resp=>resp)

export default {getAll,createPerson, deletePerson}
