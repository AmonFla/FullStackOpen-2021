
const bcrypt = require('bcrypt')
const Model = require('../../models/user')

const baseRoute = '/api/users'
const loginRoute = '/api/login'

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

const initTest = async () => {
  await Model.deleteMany({})
  const userToAdd = initData.map(async (user) => {
    const passwordHash = await bcrypt.hash(user.password, 10)
    return new Model({ username: user.username, name: user.name, passwordHash: passwordHash }).save()
  })
  await Promise.all(userToAdd)
}
const getAll = async () => {
  const data = await Model.find({})
  return data.map(data => data.toJSON())
}

const getOne = async (id) => {
  const data = await Model.findById(id)
  return data
}

module.exports = { baseRoute, loginRoute, initData, initTest, getAll, getOne }
