const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/add', (req, res) => res.render('add-book'));
router.post('/add', booksController.addBook);
router.post('/delete/:id', booksController.deleteBook);





module.exports = router;
