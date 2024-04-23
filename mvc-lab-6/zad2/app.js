const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
const userRoutes = require('./routes/user')
const bookRoutes = require('./routes/book')
const errorRoutes = require('./routes/error')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}))

app.use('/user', userRoutes)
app.use('/books', bookRoutes)
app.use('*', errorRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
