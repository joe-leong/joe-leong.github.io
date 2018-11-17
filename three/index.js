var main = document.getElementById('main');
var go = document.getElementById('go');
var speed = 5 , num = 0,timer,flag = true;
var color = ['red','green','black','blue'];
//创建行
function cDiv(){
	var oDiv = document.createElement('div');
	var index = Math.floor(Math.random() * 4);
	oDiv.setAttribute('class','row');
	for (var j = 0; j < 4; j++) {
		var iDiv = document.createElement('div');
		oDiv.appendChild(iDiv);
	}
	if (main.childNodes.length == 0) {
		main.appendChild(oDiv);
	}else{
		main.insertBefore(oDiv,main.childNodes[0]);
	}
	for (var i = 0; i < 4; i++) {
		if (i == index) {
			var clickDiv = main.childNodes[0].childNodes[index];
			clickDiv.setAttribute('class','i');
			clickDiv.style.backgroundColor = color[index];
		}
	}
}
function bindEvent(){
	main.addEventListener('click',function(e){
		
		if (flag) {
			var target = e.target;
			if (target.className == 'i') {
				target.style.backgroundColor = '#bbb';
				target.classList.remove('i');	
				num++;
			}else{
				//如果点击的div中没有i，则游戏结束
				alert('游戏结束，得分' + num);
				clearInterval(timer);
				flag = false;
			}
			//提高速度
			if (num % 10 ==0) {
				speed++;
			}
			
		}
	})
}
function move(){
	bindEvent();
	timer = setInterval(function(){
		var step = parseInt(main.offsetTop) + speed;
		main.style.top = step +'px';
		if (parseInt(main.offsetTop) >=0) {
			cDiv();
			main.style.top = '-150px';
		}
		var len = main.childNodes.length;
		if (len == 6) {
			for (var i = 0; i < 4; i++) {
				if (main.childNodes[len-1].children[i].classList.contains('i')) {
					alert('游戏结束，得分' + num);
					clearInterval(timer);
					flag = false;
				}
			}
			//移除最下方的div
			main.removeChild(main.childNodes[len-1]);
		}
	},20);
	
}


function clickStart(){
	go.addEventListener('click',function(){
		go.style.display = 'none';
		move();
	})
}

clickStart();