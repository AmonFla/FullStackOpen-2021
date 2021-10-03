import axios from 'axios' 
const baseUrl = '/api/persons'

const getAll = () => axios.get(baseUrl).then(resp => resp.data)

const createPerson = (newPerson) => axios.post(baseUrl, newPerson).then(resp=>resp.data)

const deletePerson = (id) => axios.delete(`${baseUrl}/${id}`).then(resp=>resp)

const updatePerson = (id, editedPerson) => axios.put(`${baseUrl}/${id}`, editedPerson).then(resp=>resp.data)

export default {getAll,createPerson, deletePerson, updatePerson}
