const express = require ('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require ("dotenv");

dotenv.config({path: "config/a.env"});

const app = express()
app.use (express.json())
app.use(cors())

mongoose.connect(process.env.DB_URI)

const EmployeeSchema = new mongoose.Schema({ 
    name: String,
    email: String,
    password: String
})

const port = 3001 || process.env.PORT;

const EmployeeModel = mongoose.model("employees", EmployeeSchema)

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("incorrect password")
            }
        } else {
            res.json("no record existed")
        }
    })
})

app.post ('/signup', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log("Server is running")
})