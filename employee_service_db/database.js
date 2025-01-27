const express = require('express')
const mysql = require('mysql2');

const app = express();

const db_host = 'localhost';
const db_user = 'root';
const db_password = 'admin';
const db_database = 'appdb';

 const db = mysql.createConnection({
    host : db_host,
    user : db_user,
    password : db_password,
    database : db_database

 });

 db.connect((err) => {
     if(err) {
    console.error('Error connecting to the database:', err);
    return;
 }
 console.log('connected to database');
});

app.use(express.json());


app.get('/employees', (req, res) => {
    const query = 'select * from employees';
    db.query(query, (err, results) => {
        if (err){
            console.error('error retrieving employees :', err);
            res.status(500).send({ message : 'error retrieving employees'});

        }
        else {
            res.send(results);
        }
    });
});

app.get('/employees/:id', (req, res) => {
    const id = req.params.id;
    const query = 'select * from employees where id = ?';
    db.query(query, id, (err, results) => {
      if (err) {
        console.error('Error retrieving employee:', err);
        res.status(500).send({ message: 'Error retrieving employee' });
      } else {
        res.send(results[0]);
      }
    });
  });

  app.post('/employees', (req, res) => {
    const employeeData = req.body;
    const query = 'insert into  employees set ?';
    db.query(query, employeeData, (err, results) => {
      if (err) {
        console.error('Error creating employee:', err);
        res.status(500).send({ message: 'Error creating employee' });
      } else {
        res.send({ message: 'Employee created successfully' });
      }
    });
  });

  app.put('/employees/:id', (req, res) => {
    const id = req.params.id;
    const employeeData = req.body;
    const query = 'update employees set ? where id = ?';
    db.query(query, [employeeData, id], (err, results) => {
      if (err) {
        console.error('Error updating employee:', err);
        res.status(500).send({ message: 'Error updating employee' });
      } else {
        res.send({ message: 'Employee updated successfully' });
      }
    });
  });

  app.delete('/employees/:id', (req, res) => {
    const id = req.params.id;
    const query = 'delete from employees where id = ?';
    db.query(query, id, (err, results) => {
      if (err) {
        console.error('Error deleting employee:', err);
        res.status(500).send({ message: 'Error deleting employee' });
      } else {
        res.send({ message: 'Employee deleted successfully' });
      }
    });
  });

  
  const port = 3000;
  app.listen(port, () => {
    console.log(' server started on port : 3000');
  });
  
   

  
  
  
  