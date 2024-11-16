const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
const jwt = require("jsonwebtoken")

const app = express()

app.use(cors())
app.use(express.json())
app.post("/register", (request, response) =>{
    const user = request.body.user

    console.log(user)
})

app.listen(3000, () =>{
    console.log("servidor rodando na porta 3000!")
})