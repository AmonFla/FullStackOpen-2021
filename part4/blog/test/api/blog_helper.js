const baseRoute = '/api/blogs'
const model = require('../../models/blog')

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

const getAllPost = async () => {
  const notes = await model.find({})
  return notes.map(note => note.toJSON())
}

module.exports = { baseRoute, initData, getAllPost }
