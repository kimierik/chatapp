const express = require('express');
const app =express();
const http=require('http');
const server= http.createServer(app);
const {Server}=require("socket.io");
const io =new Server(server);


app.use(express.static('modules'))
app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index.html');
});



io.on('connection',(socket)=>{
	socket.on('msg',(data)=>{
		io.emit('msg',data);
});

});



server.listen(3000,()=>{
	console.log('listening');
});




