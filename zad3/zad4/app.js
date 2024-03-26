const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const now = new Date();
  console.log(`Request ${req.method} on path ${req.path} ${now.toLocaleString()}`);
  next();
});

app.get('/home', (req, res) => {
  res.send(`<!DOCTYPE html><html><head><title>Home</title></head><body>
  <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/student">Student</a></li>
            <li><a href="/add-student">Add Student</a></li>
            <li><a href="/users">Users</a></li>
        </ul>
    </nav></body></html>`);
});

let students = [];

app.post('/student', (req, res) => {
  const { firstName, lastName, course } = req.body;
  students.push({ firstName, lastName, course });
  res.send(`<html><head><title>Student Added</title></head><body>
  <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/student">Student</a></li>
            <li><a href="/add-student">Add Student</a></li>
            <li><a href="/users">Users</a></li>
        </ul>
    </nav><p>Hello, ${firstName} ${lastName} on ${course} studies!</p></body></html>`);
});
  
app.get('/add-student', (req, res) => {
    res.send(`<!DOCTYPE html><html><head><title>Add Student</title></head><body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/student">Student</a></li>
            <li><a href="/add-student">Add Student</a></li>
            <li><a href="/users">Users</a></li>
        </ul>
    </nav><form method="POST" action="/student"><input type="text" name="firstName" placeholder="First Name"/><input type="text" name="lastName" placeholder="Last Name"/><input type="text" name="course" placeholder="Course"/><button type="submit">Submit</button></form></body></html>`);
});

app.get('/users', (req, res) => {
  let userList = '<ul>';
  students.forEach(student => {
    userList += `<li>${student.firstName} ${student.lastName} - ${student.course}</li>`;
  });
  userList += '</ul>';
  res.send(`<html><head><title>Users</title></head>
  <body>${userList}
  <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/student">Student</a></li>
            <li><a href="/add-student">Add Student</a></li>
            <li><a href="/users">Users</a></li>
        </ul>
    </nav>
    </body></html>`);
});

app.use(express.static('public'));

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/student', (req, res) => {
  res.sendFile(__dirname + '/views/student.html');
});

app.get('/add-student', (req, res) => {
  res.sendFile(__dirname + '/views/add-student.html');
});

app.get('/users', (req, res) => {
  res.sendFile(__dirname + '/views/users.html');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(PORT);
});