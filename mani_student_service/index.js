const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let students = [];

// Get all students
app.get('/students', (req, res) => {
    res.json(students);
});

// Get a student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Student not found');
    res.json(student);
});

// Create a new student
app.post('/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };
    students.push(student);
    res.status(201).json(student);
});

// Update a student by ID
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Student not found');

    student.name = req.body.name;
    student.age = req.body.age;
    student.course = req.body.course;
    res.json(student);
});

// Delete a student by ID
app.delete('/students/:id', (req, res) => {
    const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
    if (studentIndex === -1) return res.status(404).send('Student not found');

    const deletedStudent = students.splice(studentIndex, 1);
    res.json(deletedStudent);
});

app.listen(port, () => {
    console.log(`Student microservice listening at http://localhost:${port}`);
});