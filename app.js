const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

const app = express()

app.use(cors())

app.get("/", (req, res) => {
   return res.send('hello world from aws cloud')
})

app.listen(process.env.PORT || 3000, () => {
   console.log("running server at port ", process.env.PORT || 3000)
})
