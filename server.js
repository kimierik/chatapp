const express = require('express');
const app =express();
const http=require('http');
const server= http.createServer(app);
const {Server}=require("socket.io");
const io =new Server(server);
const mongo = require('mongodb').MongoClient;



mongo.connect('mongodb://localhost/chat',function(err,db){
	if(err){
			throw err;
	}
	console.log('mongo connection');
});

app.use(express.static('modules'))
app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index.html');
});



io.on('connection',(socket)=>{

	let chat_data=db.collection('messeges');

	chat_data.find().limit(1090).toArray(function(err,res){
		if(err){
			throw err;
		}
		socker.emit('load',res);
	});

	socket.on('msg',(data)=>{
		chat_data.insert({messege:data});
		io.emit('msg',data);
	});
});



server.listen(3000,()=>{
	console.log('listening');
});




