var socket=io();
var inp=document.getElementById('buddon');
var txtinput=document.getElementById('txtibnpu');
var board=document.getElementById('messege_field');
var messegearea=document.getElementById("msgarea")
inp.addEventListener('click',func);
txtinput.addEventListener('submit',func);

let isbottom=false;
function scroll(){
	if (isbottom){
	messegearea.scrollTo(0,messegearea.scrollHeight)
	}
}

function func(){
	socket.emit('msg',txtinput.value);
}




socket.on('msg',function(data){
	if (messegearea.scrollHeight==messegearea.scrollTop+500){
		isbottom=true;
	}else{
		isbottom=false;
	}

	var item=document.createElement('p');
	item.textContent=data;
	board.appendChild(item);
	scroll();
});






