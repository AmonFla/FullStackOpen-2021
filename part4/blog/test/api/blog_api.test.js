const supertest = require('supertest')
const mongoose = require('mongoose')
const h = require('./blog_helper')
const app = require('../../app')
const api = supertest(app)

const Blog = require('../../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(h.initData)
})

afterAll(() => mongoose.connection.close())

describe('TG-BLOG-01 GET All Post', () => {
  test('TC-BLOG-01-01 Content-Type is Json', async () => {
    await api.get(h.baseRoute)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('TC-BLOG-01-02 Correct amount of blog', async () => {
    const blogs = await api.get(h.baseRoute)
    expect(blogs.body).toHaveLength(h.initData.length)
  })
})
