const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const getNotFoundPage = require('./controllers/NotFound/GetNotFoundPage')
const getAddNewStudentPage = require('./controllers/students/getAddNewStudentPage')
const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}))
app.set('views', path.join(__dirname, 'views'));


app.use(getAddNewStudentPage);
app.get("/success",(req, res) => {
    res.render('Success', {})
})
app.get("/students-list",(req, res) => {
    res.render('List', {})
})
app.post("/add-student",(req, res) => {
    const body = req.body
    console.log(body);
    res.redirect('/students-list')
})
app.use(getNotFoundPage);






app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});