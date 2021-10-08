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

describe('TG-BLOG-01 GET All Blogs Post', () => {
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

describe('TG-BLOG-02 Blog Format', () => {
  test('TC-BLOG-02-01 Correct id property', async () => {
    const blogs = await api.get(h.baseRoute)
    expect(blogs.body[0].id).toBeDefined()
  })

  test('TC-BLOG-02-02 Correct _id & __v  deleted', async () => {
    const blogs = await api.get(h.baseRoute)
    expect(blogs.body[0]._id).not.toBeDefined()
    expect(blogs.body[0].__v).not.toBeDefined()
  })
})

describe('TG-BLOG-03 POST Entry to Blog', () => {
  test('TC-BLOG-03-01 Add new entry - Validate amount of post', async () => {
    const post = {
      title: 'Test new entry',
      author: 'Test Author',
      url: 'http://test.url',
      likes: 10
    }

    await api.post(h.baseRoute)
      .send(post)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const dataAfterPost = await h.getAllPost()
    expect(dataAfterPost).toHaveLength(h.initData.length + 1)
  })

  test('TC-BLOG-03-02 Add new entry - Validate content', async () => {
    const post = {
      title: 'Test new entry',
      author: 'Test Author',
      url: 'http://test.url',
      likes: 10
    }

    await api.post(h.baseRoute)
      .send(post)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const dataAfterPost = await h.getAllPost()
    const titles = dataAfterPost.map(r => r.title)
    expect(titles).toContainEqual(post.title)
  })

  test('TC-BLOG-03-03 Add new entry - Validate likes default 0', async () => {
    const post = {
      title: 'Test new entry',
      author: 'Test Author',
      url: 'http://test.url'
    }

    const afterPost = await api.post(h.baseRoute)
      .send(post)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    expect(afterPost.body.likes).toBe(0)
  })

  test('TC-BLOG-03-04 Add new entry - Validate not title and url', async () => {
    const post = {
      author: 'Test Author',
      likes: 0
    }

    await api.post(h.baseRoute)
      .send(post)
      .expect(400)
  })
})

describe('TG-BLOG-04 Delete Entry', () => {
  test('TC-BLOG-04-01 Delete entry', async () => {
    const entries = await h.getAllPost()

    await api.delete(`${h.baseRoute}/${entries[0].id}`)
      .expect(204)

    const afterDelete = await h.getAllPost()
    expect(afterDelete).toHaveLength(entries.length - 1)
  })
})
