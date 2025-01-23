const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());
app.listen(3001, function(){
    console.log('Server is running on port 3001')
});
let employees = [
    { id:101, name:'siri', age:26 },
    { id:102, name:'mani', age:26 },
    { id:103, name:'ram', age:30 },
    { id:104, name:'sita', age:29 }
];

app.get('/employees', (req,res) => {
    res.json(employees);
});


app.get('/employees/:id', (req,res) => {
    console.log(req.params.id);
    let employeeId = req.params.id;
    for(let i=0; i<employees.length; i++){
        if(employees[i].id == employeeId){
            res.json(employees[i]);
            return;
        }
    }
    res.json({"message":"employee not found"});
})

app.post('/employees', (req, res) => {
    console.log(req.body);
    let newEmployee = req.body;
    newEmployee.id = employees.length + 1;
    employees.push(newEmployee);
    return res.json(newEmployee);
})


app.patch('/employees/:id', (req, res) => {
    let employeeId = req.params.id;
    let employee = employees.find(e => e.id == employeeId);

    console.log(req.body)
    let newName = req.body.name;
    let newAge = req.body.age;
    
    if(newName != undefined){
        employee.name = newName;
    }

    if(newAge != undefined){
        employee.age = newAge;
    }

    res.json(employee);
})


app.delete('/employees/:id', (req, res) => {
    let employeeId = req.params.id;
    let employeeIndex = employees.findIndex(e => e.id == employeeId); 
    if(employeeIndex != -1){
        let deletedemployee = employees.splice(employeeIndex, 1);
        res.json(deletedemployee);
    }
    else{
        res.json({"message":"employee not found"});
    }
})



