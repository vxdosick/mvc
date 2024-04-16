const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authors');

router.get('/', authorsController.listAuthors);





module.exports = router;
