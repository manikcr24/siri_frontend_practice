const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'app_db'
};

async function createStudent(student) {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
        'INSERT INTO student (name, age, grade) VALUES (?, ?, ?)',
        [student.name, student.age, student.grade]
    );
    await connection.end();
    return result.insertId;
}

async function getStudentById(id) {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
        'SELECT * FROM student WHERE id = ?',
        [id]
    );
    await connection.end();
    return rows[0];
}

async function updateStudent(id, student) {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
        'UPDATE student SET name = ?, age = ?, grade = ? WHERE id = ?',
        [student.name, student.age, student.grade, id]
    );
    await connection.end();
    return result.affectedRows;
}

async function deleteStudent(id) {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
        'DELETE FROM student WHERE id = ?',
        [id]
    );
    await connection.end();
    return result.affectedRows;
}

module.exports = {
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent
};