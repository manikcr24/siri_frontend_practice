const express = require('express')
const mysql = require('mysql2');

const app = express();

const db_host = 'localhost';
const db_user = 'root';
const db_password = 'admin';
const db_database = 'app_db';

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

app.get('/users', (req, res) => {
    const query = 'select * from users';
    db.query(query, (err, results) => {
        if (err){
            console.error('error retrieving users :', err);
            res.status(500).send({ message : 'error retrieving users'});

        }
        else {
            res.send(results);
        }
    });
});


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const query = 'select * from users where id = ?';
    db.query(query, id, (err, results) => {
      if (err) {
        console.error('Error retrieving users', err);
        res.status(500).send({ message: 'Error retrieving users' });
      } else {
        res.send(results[0]);
      }
    });
  });


  app.post('/users', (req, res) => {
    const userData = req.body;
    const query = 'insert into users set ?';
    db.query(query, userData, (err, results) => {
      if (err) {
        console.error('Error creating user', err);
        res.status(500).send({ message: 'Error creating user' });
      } else {
        res.send({ message: 'user created successfully' });
      }
    });
  });


  app.patch('/users/:id', (req, res) => {
    const id = req.params.id;
    const userData = req.body;
    const query = 'update users set ? where id = ?';
    db.query(query, [userData, id], (err, results) => {
      if (err) {
        console.error('Error updating user', err);
        res.status(500).send({ message: 'Error updating user' });
      } else {
        res.send({ message: 'user updated successfully' });
      }
    });
  });


  app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const query = 'delete from users where id = ?';
    db.query(query, id, (err, results) => {
      if (err) {
        console.error('Error deleting user', err);
        res.status(500).send({ message: 'Error deleting user' });
      } else {
        res.send({ message: 'user deleted successfully' });
      }
    });
  });



  app.get('/todos', (req, res, next) => {
    logRequest(req)
    next()
  }, (req, res) => {
    let user_id = req.query.user_id
    let status = req.query.status

    if(user_id == undefined) {
      return res.status(400).send({ message : 'user_id is required'})
    }

    let query = 'select * from todos where user_id = ?'

    if(status != undefined) {
        query += ` and status = ?`
    }

    db.query(query, [user_id, status], (err, results) => {
        if (err){
            console.error('error retrieving todos :', err);
            res.status(500).send({ message : 'error retrieving todos'});

        }
        else {
            res.send(results);
        }
    });
});


app.get('/todos/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    const query = 'select * from todos where user_id = ? ';
    db.query(query, user_id, (err, results) => {
      if (err) {
        console.error('Error retrieving todos', err);
        res.status(500).send({ message: 'Error retrieving todos' });
      } else {
        res.send(results);
      }
    });
  });


  app.post('/todos', (req, res, next) => {
    logRequest(req)
    next()
  }, (req, res) => {
    const todolist = req.body;
    const query = 'insert into  todos set ?';
    db.query(query, todolist, (err, results) => {
      if (err) {
        console.error('Error creating todos', err);
        res.status(500).send({ message: 'Error creating todos' });
      } else {
        res.send({ message: 'todos created successfully' });
      }
    });
  });


  app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const todosData = req.body;
    const query = 'update todos set ? where id = ?';
    db.query(query, [todosData, id], (err, results) => {
      if (err) {
        console.error('Error updating todos', err);
        res.status(500).send({ message: 'Error updating todos' });
      } else {
        res.send({ message: 'todos updated successfully' });
      }
    });
  });



  app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    const query = 'delete from todos where id = ?';
    db.query(query, id, (err, results) => {
      if (err) {
        console.error('Error deleting todos', err);
        res.status(500).send({ message: 'Error deleting todos' });
      } else {
        res.send({ message: 'todos deleted successfully' });
      }
    });
});




app.listen(3000, () => {
    console.log('Server is running on port 3000')
})



function logRequest(req) {
  console.log('\n\n ******************')
  console.log('RECEIVED REQUEST ON: ', req.route.path)
  console.log('REQUEST METHOD: ', req.method)
  console.log('QUERY PARAMS:', req.query)
  console.log('URL PARAMS:', req.params)
  console.log('BODY:', req.body)
  console.log('HEADERS:', req.headers)
  console.log('HOST:', req.hostname)
  console.log('STATUS:', req.status)
  console.log(' ****************** \n\n')
}
