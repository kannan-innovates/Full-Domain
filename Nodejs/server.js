//<-----[ Nodejs SERVER ]------>

const http = require('http')
const server = http.createServer((req,res)=>{
     res.writeHead(200,{'content-type':'text/plain'})
     res.end('Hello World')
})

server.listen(3000,()=>{
     console.log('server is running on http://localhost:3000')
})

//<-----[ EXPRESS SERVER ]------>

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
     res.send('Hello World')
})

app.listen(3000,()=>{
     console.log('server is running on http://localhost:3000')
})

