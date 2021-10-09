const mongoose = require('mongoose')
const uniqueVal = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    unique: true,
    minlength: 3
  },
  passwordHash: {
    type: String
  }
}).set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
}).plugin(uniqueVal)

module.exports = mongoose.model('User', userSchema)
