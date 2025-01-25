const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'app_db'
});

async function createStudent(student) {
    const { name, email } = student;
    const [result] = await pool.query('INSERT INTO students (name, email) VALUES (?, ?)', [name, email]);
    return result.insertId;
}

async function getStudentById(id) {
    const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [id]);
    return rows[0];
}

async function getAllStudents() {
    const [rows] = await pool.query('SELECT * FROM students');
    return rows;
}

async function updateStudent(id, student) {
    const { name, email } = student;
    const [result] = await pool.query('UPDATE students SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    return result.affectedRows > 0;
}

async function deleteStudent(id) {
    const [result] = await pool.query('DELETE FROM students WHERE id = ?', [id]);
    return result.affectedRows > 0;
}

module.exports = {
    createStudent,
    getStudentById,
    getAllStudents,
    updateStudent,
    deleteStudent
};


// getAllStudents().then(res => console.log(res));

// let studentId = 1;
// let newStudentData = {
//     "name": "Manikanta CHERUKU",
//     "email": "manik.cr24@gmail.com"
// }
// updateStudent(studentId, newStudentData).then(res => console.log(res));

// createStudent({
//     name: 'RV',
//     email: 'test@gmai.com'
// }).then(res => console.log(res));