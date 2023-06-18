const { read, write } = require("./io");

const getAllStudents = async () => {
  return read();
  return await read();
};

//create method
const addNewStudent = async (newStudentData) => {
  let students = await read(); //students is an Array
  students.push(newStudentData);
  await write(students);
  students.push(newStudentData); //the new student is added at the end of the array
  await write(students); //writes the file with the new student
};

//delete student
const deleteStudent = async (studentIndex) => {
  students = students.filter((student, index) => index !== studentIndex);
  await write(students);
};

const editStudent = async (studentIndex, studentNewData) => {
  let students = await read();
  students = students.map((student, index) => {
    if (studentIndex === index) {
      return {
        ...student,
        ...studentNewData,
      };
    }
  });
};

//Create, read, update, delete

module.exports = {
  getAllStudents,
  addNewStudent,
  deleteStudent,
  editStudent,
};