const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home', (req, res) => {
  res.send('<!DOCTYPE html><html><head><title>Home</title></head><body><p>HOME</p></body></html>');
});

let students = [];

app.post('/student', (req, res) => {
  const { firstName, lastName, course } = req.body;
  students.push({ firstName, lastName, course });
  res.send(`<html><head><title>Student Added</title></head><body><p>Hello, ${firstName} ${lastName} on ${course} studies!</p></body></html>`);
});
  
app.get('/add-student', (req, res) => {
    res.send('<!DOCTYPE html><html><head><title>Add Student</title></head><body><form method="POST" action="/student"><input type="text" name="firstName" placeholder="First Name"/><input type="text" name="lastName" placeholder="Last Name"/><input type="text" name="course" placeholder="Course"/><button type="submit">Submit</button></form></body></html>');
});

app.get('/users', (req, res) => {
  let userList = '<ul>';
  students.forEach(student => {
    userList += `<li>${student.firstName} ${student.lastName} - ${student.course}</li>`;
  });
  userList += '</ul>';
  res.send(`<html><head><title>Users</title></head><body>${userList}</body></html>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(PORT);
});