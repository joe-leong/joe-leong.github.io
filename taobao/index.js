var index = 0;
init();
function init(){
	$('#pic-box a').eq(index).fadeIn(300).siblings('a').fadeOut(300);
	$('.list li').eq(index).css('background','#f40').siblings('li').css('background','#ddd');
}

function run(){
	index++;
	if (index == 5) {
		index = 0;
	}
	init();
}
var timer = setInterval(run,1800);
$('#pic-box').hover(function(){
	if (timer) {
		clearInterval(timer);
	}
},function(){
	timer = setInterval(run,1800);
})
$('.list li').mouseenter(function(){
	index = $(this).index();
	init();
})
