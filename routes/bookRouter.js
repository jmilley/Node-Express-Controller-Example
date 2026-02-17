// routes/bookRouter.js
const { Router } = require("express");

const bookRouter = Router();

// /books/
bookRouter.get("/", (req, res) => res.send("All books"));
// /books/205830538033
bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

module.exports = bookRouter;
