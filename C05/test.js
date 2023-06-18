const {
    getAllStudents,
    addNewStudent,
    deleteStudent,
    editStudent,
  } = require("./students");
  
  //IIFE
  (async () => {
    try {
      await addNewStudent({ name: "Pero", surname: "Perovski", age: "2002" });
    } catch (err) {
      console.log("Error", err);
    } finally {
      console.log("END CODE");
    }
  })();

  const addNewStudent = async (newStudentData) => {
    let students = await read(); 
    students.push(newStudentData);
    await write(students);
    students.push(newStudentData); 
    await write(students); 
  };