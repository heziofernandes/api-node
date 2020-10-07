const express = require('express')
const server = express()
server.use(express.json())

const users =['maria', 'jose','Renato']

server.get('/users',(req, res)=>{
    const id = req.params.id

    return res.json({users})
})

server.post('/users',(req, res)=>{
    const {name} = req.body
    users.push(name)

    return res.json({users})
})

server.put('/users/:index',(req, res)=>{
    const {index} = req.params
    const {name} = req.body

    users[index] = name

    return res.json({users})
})

server.put('/users/:index',(req, res)=>{
   users.splice(index, 1)
})

server.listen(3000)