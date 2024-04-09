const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}))
app.set('views', path.join(__dirname, 'views'));


app.get("/",(req, res) => {
    res.render('Home', {})
})
app.get("/success",(req, res) => {
    res.render('Success', {})
})
app.get("/students-list",(req, res) => {
    res.render('List', {})
})
app.post("/add-student",(req, res) => {
    res.redirect('/students-list')
})






app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});