var mysql = require('mysql2');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database:"my_db"
});
//con.connect(function(err) {
  //if (err) throw err;
  //console.log("Connected!");
 // con.query("CREATE DATABASE my_db", function (err, result) {
   // if (err) throw err;
   // console.log("Database created");
  //});
  //var sql = "CREATE TABLE students (id int auto_increment primary key, name VARCHAR(255), email VARCHAR(255))";
  //con.query(sql, function (err, result) {
   // if (err) throw err;
   // console.log("Table created");
  //});
  //var sql = "INSERT INTO students (id, name, email) VALUES (101,'mani', 'mani143@gmail.com')";
  //con.query(sql, function (err, result) {
  //  if (err) throw err;
   // console.log("1 record inserted");
 // });

 var sql = "INSERT INTO students (id, name, email) VALUES ?";
 var values = [
   [102, "manik", "manik1115@gmail.com"],
  [103, "mahesh", "mahesh03@gmail.com"],
   [104, "siri", "siri1109@gmail.com"]
];
//con.query(sql, [values], function (err, result) {
 // if (err) throw err;
//console.log("Number of records inserted: " + result.affectedRows);
//});


con.connect(function(err) {
    if (err) throw err;
   // con.query("SELECT * FROM students", function (err, result, fields) {
    //  if (err) throw err;
     // console.log(result);
    //});
   // con.query("SELECT * FROM students WHERE id =101 ", function (err, result) {
      //  if (err) throw err;
       // console.log(result);
    //  });

      //con.query("SELECT * FROM students ORDER BY name", function (err, result) {
      //  if (err) throw err;
       // console.log(result);
      //});


      var sql = "UPDATE students SET email = 'manik.cr24@gmail.com' WHERE email = 'manik1115@gmail.com'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
 });




  