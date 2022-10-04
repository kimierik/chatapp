


	var socket=io();
	var inp=document.getElementById('buddon');
	var txtinput=document.getElementById('txtibnpu');
	var board=document.getElementById('messege_field');
	inp.addEventListener('click',func);

	function func(){
		socket.emit('msg',txtinput.value);
	}

	socket.on('msg',function(data){
		var item=document.createElement('p');
		item.textContent=data;
		board.appendChild(item);


	});






