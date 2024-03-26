const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.send('<!DOCTYPE html><html><head><title>Home</title></head><body><p>HOME</p></body></html>');
});

app.get('/student', (req, res) => {
    res.send('<!DOCTYPE html><html><head><title>Student</title></head><body><p>STUDENT</p></body></html>');
});
  
  app.get('/add-student', (req, res) => {
    res.send('<!DOCTYPE html><html><head><title>Add Student</title></head><body><p>ADD-STUDENT</p></body></html>');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(PORT);
});