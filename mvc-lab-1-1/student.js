const FULLNAME = "Bob Cat";
const STUDENT_ID = "00445";

function getStudentFullName(id) {
    switch(id) {
      case 0: return "Ivan Ivanov";
      case 1: return "Kacper Nowak";
      case 2: return "Maja Kowalska";
      default: return "Michal Wisniewski";
    }
  }
  
  function getStudentId(id) {
    switch(id) {
      case 0: return "123456";
      case 1: return "111222";
      case 2: return "222333";
      default: return "333444";
    }
  }
  
  module.exports = { getStudentFullName, getStudentId };

module.exports = {
    getStudentFullName,
    getStudentId
}