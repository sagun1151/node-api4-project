require('dotenv').config()
const express = require('express')
const Users = require('./api/model')
const server = express();

server.use(express.json())
server.use(cors())

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log('listening on port', PORT)
})

server.get('/api/user', async (req, res)=> {
    try{
        const all = await Users.find()
        res.json(all)
    }catch(err){
        res.status(500).json({message:err})
    }
})

server.post('./api/register', async (req, res) => {
    try{
        const newUser = await Users.insert(req.body)
        res.status(201).json(newUser)
    }catch(err){
        res.status(500).json({message:err})
    }
})

server.post('./api/login', async (req, res) => {
    try{
        const user = await Users.findByName()
        res.json({message:"Hellooo!!"})
    }catch(err){
        res.status(500).json({message:err})
    }
})

server.use('*', (req, res)=> {
    res.send('<h1>Home Page<h1>')
})