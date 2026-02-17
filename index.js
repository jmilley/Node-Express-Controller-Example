// app.js
const express = require("express")
const app = express()
const authorRouter = require("./routes/authorRouter")
const bookRouter = require("./routes/bookRouter")
const indexRouter = require("./routes/indexRouter")


// app.use("/authors", authorRouter)
// app.use("/books", bookRouter)
// app.use("/", indexRouter)

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