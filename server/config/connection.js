
const mongoose = require('mongoose')
const connectToDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://nenu:8BHLtC9F40pTWt2E@cluster0.nrm88.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.log(`MongoDB Connection Error: ${err.message}`)
  }
}
connectToDB()
module.exports = mongoose.connection