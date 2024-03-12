const student = require('./student');
const http = require('http');
const PORT = 3000;

const requestListener = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<html><head><title>Student</title></head><body><p>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</p></body></html>`);
};

const server = http.createServer(requestListener);
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
