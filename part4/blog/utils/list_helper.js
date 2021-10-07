const _ = require('lodash')
const dummy = (blogs) => 1

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => blog.likes + sum
  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const reducer = (prev, blog) =>
    prev.likes < blog.likes
      ? blog
      : prev

  return blogs.reduce(reducer, blogs[0])
}

const mostBlog = (blogs) => {
  const posrByAuthor = _.countBy(blogs, 'author')
  return Object.keys(posrByAuthor).reduce((a, b) => posrByAuthor[a] > posrByAuthor[b] ? a : b)
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlog
}
