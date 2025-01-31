const express = require('express')
const mysql2 = require('mysql2/promise')
const app = express()

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

