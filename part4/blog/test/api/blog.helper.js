const baseRoute = '/api/blogs'
const Model = require('../../models/blog')

const initData = [{
  title: 'Hola Mundo',
  author: 'El que escribio',
  url: 'http://algun.lugar',
  likes: 10
}, {
  title: 'Hola Mundo',
  author: 'Yo y que',
  url: 'http://algun.lugar',
  likes: 11
}, {
  title: 'Hola Mundo',
  author: 'El que escribio',
  url: 'http://algun.lugar',
  likes: 5
}, {
  title: 'Hola Mundo',
  author: 'Yo y que',
  url: 'http://algun.lugar',
  likes: 7
}]

const initTest = async () => {
  await Model.deleteMany({})
  await Model.insertMany(initData)
}
const getAllPost = async () => {
  const blog = await Model.find({})
  return blog.map(blog => blog.toJSON())
}

const getOne = async (id) => {
  const blog = await Model.findById(id)
  return blog
}
module.exports = { baseRoute, initData, initTest, getAllPost, getOne }
