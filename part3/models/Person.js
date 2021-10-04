const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

console.log('Connecting to MongoDB')

mongoose
  .connect(process.env.MONGODB_URI)
  .then( () => console.log('Connected to MongoDB'))
  .catch(error => console.log('Connection error: ', error.message))

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 3
  },
  number: {
    type: String,
    required: true,
    minlength: 8
  }
})
  .plugin(uniqueValidator)
  .set('toJSON',{
    transform: (doc, retObj) => {
      retObj.id = retObj._id.toString()
      delete retObj._id
      delete retObj.__v
    }
  })

module.exports = mongoose.model('Person',personSchema)
