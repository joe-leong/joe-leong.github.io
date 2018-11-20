var index = 0;
init();
function init() {
	$('#pic-box a').eq(index).fadeIn(300).siblings('a').fadeOut(300);
	$('.list li').eq(index).css('background', '#f40').siblings('li').css('background', '#ddd');
}

function run() {
	index++;
	if (index == 5) {
		index = 0;
	}
	init();
}
var timer = setInterval(run, 1800);
$('#pic-box').hover(function () {
	if (timer) {
		clearInterval(timer);
	}
}, function () {
	timer = setInterval(run, 1800);
})
$('.list li').mouseenter(function () {
	index = $(this).index();
	init();
})

// 二级菜单选项
var on = false;
var selOn = false;
var sel = document.getElementsByClassName('inner-con-sel')[0];
var selLis = sel.getElementsByTagName('li');
var innerLeft = document.getElementById('inner-left-ul');
var lis = innerLeft.getElementsByTagName('li');


for (var i = 0; i < lis.length; i++) {
	(function (i) {
		lis[i].onmouseenter = function () {
			selLis[i].style.display = 'block';
			// on = true
		}
		lis[i].onmouseleave = function () {
				selLis[i].style.display = 'none'
		}
		selLis[i].onmouseenter = function(){
			selLis[i].style.display = 'block'
		}
		selLis[i].onmouseleave = function () {
			selLis[i].style.display = 'none'
		}

	})(i)
}

