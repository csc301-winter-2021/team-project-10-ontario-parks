const express = require('express')
const app = express()
app.use(express.json())
PORT = 3000


const fs = require('fs')
let userjson = fs.readFileSync("./data/user_data.json", "utf-8")
let user_data = JSON.parse(userjson)

app.get('/login', (req, res) => {
    const useremail = req.body.email
    const userpassword = req.body.password
    let found = false
    user_data.forEach((user)=>{
        if(user.email === useremail){
            if(user.password === userpassword){
                found = true
                res.status(200).send(user.name+" loged in!!")
            }
        }
    })
    if(!found){
        res.status(404).send("email or password incorrect")
    }
})

app.post('/signup', (req, res)=>{
    const useremail = req.body.email
    let found = false
    user_data.forEach((user)=>{
        if(user.email === useremail){
            found = true
            res.status(409).send("This email is already registered")
        }
    })
    if(!found){
        const user = {
            "name": req.body.name,
            "email": req.body.email,
            "password": req.body.password,
            "preference": req.body.preference
        }
        user_data.push(user)
        userjson = JSON.stringify(user_data)
        fs.writeFileSync("./data/user_data.json",userjson, "utf-8")
        res.status(201).send("success")
    }


})

app.listen(PORT)