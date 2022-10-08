const express = require('express');
const app =express();
const http=require('http');
const server= http.createServer(app);
const {Server}=require("socket.io");
const io =new Server(server);
const {MongoClient} = require('mongodb');

const url ='mongodb://localhost:27017'
const client= new MongoClient(url)
const dbname='chat';

app.use(express.static('modules'))
app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index.html');
});


client.connect();

console.log('mongo connection');
const db =client.db(dbname);
const collection=db.collection('messeges');



io.on('connection',(socket)=>{


	console.log('user');
	collection.find({}).limit(1090).toArray(function(err,res){
		if(err){
			throw err;
		}
		socket.emit('load',res);
	});

	socket.on('msg',(data)=>{
		chat_data.insert({messege:data});
		io.emit('msg',data);
	});
});



server.listen(3000,()=>{
	console.log('listening');
});




