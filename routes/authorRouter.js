// routes/authorRouter.js
const { Router } = require("express");
const { getAuthorById } = require('../controllers/authorController');

const authorRouter = Router();

// /authors/
authorRouter.get("/", (req, res) => res.send("All authors"));

// /authors/1, authors/102482052
authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;






