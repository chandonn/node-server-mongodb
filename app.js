const express = require("express")
const mongoose = require("mongoose")
const blogRouter = require("./routes/BlogRoutes")

const App = express()

App.use(express.json())

mongoose.set('strictQuery', false)

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (e) => {
    if (e) {
      console.log("Error: ", e)
    } else {
      console.log("Connected the database with success")
    }
  }
)

App.use("/api/blogs", blogRouter)

App.listen(3001, () => {
  console.log("App started at port 3001")
})

module.exports = App
