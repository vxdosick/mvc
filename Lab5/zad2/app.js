const express = require('express');
const app = express();
const PORT = 3000;
const homeRouter = require('./routes/home');
const bookRouter = require('./routes/books');
const authorRouter = require('./routes/authors');

const path = require('path');
app.set('views', path.join(__dirname, 'views'));




app.set('view engine', 'ejs');
app.use('/', homeRouter);
app.use('/book/list', bookRouter);
app.use('/author/list', authorRouter);
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
