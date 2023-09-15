const express = require('express');
const app = express();
const {createServer} = require('http')
const {Server} = require('socket.io')

const server = createServer(app)

app.use(express.static('../client'))
const io = new Server(server)

app.get('/',(req,res)=>{
    res.sendFile('C:/Users/vansh koul/Desktop/Projects/realtime-canvas/client/index.html')
})

io.on('connection',(socket)=>{
    console.log('new user connected')
    socket.on('pixel',(pxl)=>{
        io.emit('pixel',pxl)
    })

    socket.on('start',(msg)=>{
        io.emit('start',msg)
    })

    socket.on('end',()=>{
        io.emit('end')
    })
})

server.listen(8000,()=>{
    console.log('listening to port 8000')
})