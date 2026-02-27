// app.js
const express = require("express")
const app = express()
const path = require("node:path")

// local files
const authorRouter = require("./routes/authorRouter")
const bookRouter = require("./routes/bookRouter")
const indexRouter = require("./routes/indexRouter")


app.use("/authors", authorRouter)
app.use("/books", bookRouter)
app.use("/", indexRouter)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// define public assets
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))


const PORT = 3000
app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`My first Express app - listening on port ${PORT}!`)
})

// handles all application errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err)
})