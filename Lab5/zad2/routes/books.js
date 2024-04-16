const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');


router.get('/', booksController.listBooks);





module.exports = router;
