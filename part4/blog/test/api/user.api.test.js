const supertest = require('supertest')
const mongoose = require('mongoose')
const uh = require('./user.helper')
const app = require('../../app')
const api = supertest(app)

beforeEach(async () => {
  await uh.initTest()
}, 10000)

afterAll(() => mongoose.connection.close())

describe('TG-USER-01 GET data', () => {
  test('TC-USER-01-01 - GET give correct content type', async () => {
    await api.get(uh.baseRoute)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  test('TC-USER-01-02 - GET all users', async () => {
    const allData = await api.get(uh.baseRoute)
    expect(allData.body).toHaveLength(uh.initData.length)
  })
})

describe('TG-USER-02 POST data', () => {
  test('TC-USER-02-01 - Correct adding user', async () => {
    const user = {
      username: 'newuser',
      password: '123456',
      name: 'New User'
    }

    await api.post(uh.baseRoute)
      .send(user)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const afterPost = await uh.getAll()
    expect(afterPost).toHaveLength(uh.initData.length + 1)
  })

  test('TC-USER-02-02 - Username must be unique', async () => {
    const users = uh.initData
    await api.post(uh.baseRoute)
      .send(users[0])
      .expect(400)
  })

  test('TC-USER-02-03 - Username required', async () => {
    const user = {
      password: '123456',
      name: 'New User'
    }

    await api.post(uh.baseRoute)
      .send(user)
      .expect(400)
  })

  test('TC-USER-02-04 - Password required', async () => {
    const user = {
      username: 'newuser',
      name: 'New User'
    }

    await api.post(uh.baseRoute)
      .send(user)
      .expect(400)
  })

  test('TC-USER-02-05 - Username and Password required', async () => {
    const user = {
      name: 'New User'
    }

    await api.post(uh.baseRoute)
      .send(user)
      .expect(400)
  })

  test('TC-USER-02-06 - Username must be 3 characters long', async () => {
    const user = {
      username: 'ne',
      password: '123456',
      name: 'New User'
    }

    await api.post(uh.baseRoute)
      .send(user)
      .expect(400)
  })

  test('TC-USER-02-07 - Password must be 3 characters long', async () => {
    const user = {
      username: 'newuser',
      password: '12',
      name: 'New User'
    }

    await api.post(uh.baseRoute)
      .send(user)
      .expect(400)
  })

  test('TC-USER-02-08 - Username and Password must be 3 characters long', async () => {
    const user = {
      username: 'ne',
      password: '12',
      name: 'New User'
    }

    await api.post(uh.baseRoute)
      .send(user)
      .expect(400)
  })
})

describe('TG-USER-03 LOGIN', () => {
  test('TC-USER-03-01 - Login valid user', async () => {
    const user = {
      username: uh.initData[0].username,
      password: uh.initData[0].password
    }
    const data = await api.post(uh.loginRoute)
      .send(user)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(data.body.token).toBeDefined()
  }, 10000)

  test('TC-USER-03-01 - Login invalid user', async () => {
    const user = {
      username: 'nouser',
      password: '123456'
    }

    await api.post(uh.loginRoute)
      .send(user)
      .expect(401)
  })
})
