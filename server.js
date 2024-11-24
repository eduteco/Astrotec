const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
const jwt = require("jsonwebtoken")

const app = express()

const{DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, SECRET_KEY} = process.env

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.post("/api/register", (request, response) =>{
    console.log('Foi feita a requisição!');
    const user = request.body.user


    const searchCommand = `
        SELECT * FROM Users
        WHERE email = ?
    
    `

    db.query(searchCommand, [user.email], (error, data) => {
        if(error){
            console.log(error)
            return
        }

        if(data.length != 0){
            response.json({ message: "já existe um usuario com esse e-mail. tente outro e-mail!", userExists: true})
            return
        }

        const insertCommand = `
            INSERT INTO Users(name, email, password)
            VALUES(?,?,?)
        `

        db.query(insertCommand, [user.name, user.email, user.password], (error) =>{
            if(error){
                console.log(error)
                return
            }

            response.json({ message: "Usuario cadastrado com sucesso!"})
            console.log('Usuario cadastrado com sucesso!');
        })
    })

})

app.post("login", (request, response) =>{
    const user = request.body.user

    const searchCommand = `
        SELECT * FROM Users
        WHERE email = ?
    `

    db.query(searchCommand, [user.email], (error, data) => {
        if(error){
            console.log(error)
            return
        }

        if(data.length === 0){
            response.json({ message: "Não existe usuario cadastrado com ess email"})
            return
        }

        if(user.password === data[0].password){
            const email = user.email
            const token = jwt.sign({email}, SECRET_KEY, {expiresIn: "1h"})
            response.json({token, ok:true})
            return
        }

        response.json({message: "Credenciais invalidas!"})
    })
})

app.listen(3000, () =>{
    console.log("servidor rodando na porta 3000!")
})

const db = mysql.createPool({
    connectionLimit: 10,
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
})
