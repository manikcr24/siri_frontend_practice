const express = require('express')
const app = express()
//app.use(cors())
app.listen(3001, function() {
    console.log('Server is running on port 3001')
});
app.get('/students', function(req, res) {
    console.log('GET /students');
    res.json([
        {
          "name":"siri",
           "age": 26
        },
        {
          "name":"manikanta",
          "age" :27
        },
        {
            "name":"chinni",
            "age":25
        }
    ]);
})
app.post('/students', function(req, res) {
    console.log('POST /students');
    res.json(
        { 
            "status":"up"

        }

    )

})
app.put('/students', function(req, res) {
    console.log('PUT /students');
    res.json(
        {
            "name":"subbu gadu",
            "company":"payu"
        }
    )
})
app.patch('/students', function(req, res) {
    console.log('PATCH /students');
    res.json(
        {
            "name":"subbu garu",
            "company":"payu"
        }
    )
}) 
app.delete('/students', function(req, res) {
    console.log('DELETE / students');
    res.json(
        {
            "name":"subbu gadu",
            "age":27
        }
    )
})