
// Create Http server
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

// Server should run on a port. --> 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000')
});

// Create rest apis
// /todos → GET → response should be list of todo items;
app.get('/todos', function(req, res) {
    console.log('GET /todos');

    res.json([
        {
          "userId": 1,
          "id": 1,
          "title": "Teach Node js to Siri",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "Siri should teach Node js to me",
          "completed": false
        }]);
})

// http://localhost:3000/todos