const express = require('express');
const database = require('./database')

const app = express();
const port = 3000;

app.use(express.json());

// Get all students
app.get('/students', (req, res) => {
    // LOAD DATA FROM STUDENT TABLE
    // RETURN IT 
    database.getAllStudents().then(result => {
        console.log(result);
        res.json(result);
    })
});

// Get a student by ID
app.get('/students/:id', (req, res) => {
    let studentId = req.params.id
    let result = database.getStudentById(studentId)
    database.getStudentById(studentId).then(result => {
        res.json(result)
    })
});

// Create a new student
app.post('/students', (req, res) => {
    let student = {
        name: req.body.name,
        email: req.body.email 
    }
    database.createStudent(student).then(result => {
        res.json(result)
    })
});

// Update a student by ID
app.put('/students/:id', (req, res) => {
    // TODO SIRI
});

// Delete a student by ID
app.delete('/students/:id', (req, res) => {
    // TODO SIRI
});

app.listen(port, () => {
    console.log(`Student microservice listening at http://localhost:${port}`);
});