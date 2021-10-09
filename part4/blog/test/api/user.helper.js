
const baseRoute = '/api/users'
const loginRoute = '/api/login'
const model = require('../../models/user')

const initData = [{
  username: 'root',
  password: '123456',
  name: 'Root User'
}, {
  username: 'admin',
  password: '987654',
  name: 'Admin User'
}, {
  username: 'publisher',
  password: '546145',
  name: 'Publisher User'
}]

const getAll = async () => {
  const data = await model.find({})
  return data.map(data => data.toJSON())
}

const getOne = async (id) => {
  const data = await model.findById(id)
  return data
}

module.exports = { baseRoute, loginRoute, initData, getAll, getOne }
