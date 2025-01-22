const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let students = [
    { id: 1, name: 'Siri Chandana', age: 26 },
    { id: 2, name: 'Manikanta', age: 26 },
    { id: 3, name: 'John Doe', age: 22 }
];

// Get all students
app.get('/students', (req, res) => {
    res.json(students);
});


app.get('/students/:id', (req, res) => {
    // const student = students.find(s => s.id === 10);
    console.log(req.params.id);
    let studentId = req.params.id;
    for(let i=0; i<students.length; i++){
        if(students[i].id == studentId){
            res.json(students[i]);
            return;
        }
    }
    res.json({"message":"Student not found"});
})


app.post('/students', (req, res) => {
    console.log(req.body);
    let newStudent = req.body;
    newStudent.id = students.length + 1;
    students.push(newStudent);
    return res.json(newStudent);
})

// PATCH
app.patch('/students/:id', (req, res) => {
    let studentId = req.params.id;
    let student = students.find(s => s.id == studentId);

    console.log(req.body)
    let newName = req.body.name;
    let newAge = req.body.age;
    
    if(newName != undefined){
        student.name = newName;
    }

    if(newAge != undefined){
        student.age = newAge;
    }

    res.json(student);
})


app.delete('/students/:id', (req, res) => {
    let studentId = req.params.id;
    let studentIndex = students.findIndex(s => s.id == studentId); 
    if(studentIndex != -1){
        let deletedStudent = students.splice(studentIndex, 1);
        res.json(deletedStudent);
    }
    else{
        res.json({"message":"Student not found"});
    }
})




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});