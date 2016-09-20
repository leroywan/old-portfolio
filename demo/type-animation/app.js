

var body = document.getElementById('body');
var h1 = document.getElementById('intro');
var h2 = document.getElementById('line-2');
var intro = document.getElementById('intro');
var introDescription = document.getElementById('intro-description');
var createdBy = document.getElementById('created-by');
var demo = document.getElementById('demo');
var docs = document.getElementById('documentation');
var installation = document.getElementById('installation');
var navigation = document.getElementById('navigation');





intro.typeAnimation.play(50, function(){
	navigation.style.animationPlayState = 'running';
	demo.typeAnimation.play();
	docs.typeAnimation.play();
	installation.typeAnimation.play();
	introDescription.typeAnimation.play(70, function(){	
		createdBy.typeAnimation.play();
	});
});


var demoTitle1 = document.getElementById('demo-title-1')
demo.addEventListener('click', function(){
	window.scrollTo(0, window.innerHeight);
	
})


documentation.addEventListener('click', function(){
	
})


installation.addEventListener('click', function(){
	
})

// DEMO-4

var demo4Button = document.getElementById('demo-4-button');
var demo4Content = document.getElementById('demo-4-content');

demo4Button.addEventListener('click', function(){


	demo4Content.typeAnimation.play();

})

var demo5Button = document.getElementById('demo-5-button');
var demo5Content = document.getElementById('demo-5-content');

demo5Button.addEventListener('click', function(){


	demo5Content.typeAnimation.play(15);

})

var demo6Button = document.getElementById('demo-6-button');
var demo6Content = document.getElementById('demo-6-content');

demo6Button.addEventListener('click', function(){

	demo6Content.typeAnimation.play(15, function(){alert('It works!')});

})



var demo7Button = document.getElementById('demo-7-button');
var demo7Content = document.getElementById('demo-7-content');
demo7Button.addEventListener('click', function(){

	demo7Content.typeAnimation.play(30);

})
