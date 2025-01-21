const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());

app.listen(2025, function(){
    console.log('Server is running on port 2025')
});
app.get('/employeedetails', function(req, res){
    console.log('GET /employeedetails');
    res.json([
        {
            "name":"ram",
             "id.no":1234,
             "phone.no":1234567890,
             "mail-id":"ram1234@gmail.com"
        },
        {
            "name":"sita",
            "id.no":5678,
            "phone.no":9234567810,
            "mail-id":"sita5678@gmail.com"
        },
        {
            "name":"lakshman",
            "id.no":4321,
            "phone.no":9834567210,
            "mail-id":"lakshman4321@gmail.com"
        },
        {
            "name":"mani",
            "id.no":1115,
            "phone.no":7036809609,
            "mail-id":"mani1115@gmail.com"
        }

    ])
})