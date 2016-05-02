window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


var header = document.getElementById('header');
var menuBar = document.getElementById('menu-bar');
var menu = document.getElementById('menu');
var title = document.getElementById('title');
var main = document.getElementsByTagName('main')[0];

var menuState = true;
menuBar.onclick = function(){

	if (menu.style.display == ''){
		menu.style.display = 'inline-block';
		menu.style.animationPlayState = 'running';
		menuState = true;
	} else {
		menu.style.display = '';
		menu.style.animationPlayState = 'paused';
		menuState = false;
	};
};

if (menuState == true) {
	main.onclick = function(){
		menu.style.display = '';
		menuState = false;
	}
}

// Navigation
var frontPage = document.getElementById('front-page');
var aboutPage = document.getElementById('about-page');
var projectPage = document.getElementById('project-page');
var contactNav = document.getElementById('contact-page');

var aboutNav = document.getElementById('about-nav');
var projectNav = document.getElementById('project-nav');
var contactNav = document.getElementById('contact-nav');

var closeMenu = function(){
	setTimeout(function(){
		menu.style.display = '';
	}, 00)
}
	
contactNav.onclick = function(){
	window.scrollTo(0, 590+aboutPage.clientHeight + projectPage.clientHeight);
	closeMenu();
}

aboutNav.onclick = function(){
	window.scrollTo(0, window.innerHeight-5);
	closeMenu();
}

projectNav.onclick = function(){
	window.scrollTo(0, window.innerHeight + aboutPage.clientHeight)
	closeMenu();
}


var eventListener = function(){
	if (window.scrollY < window.innerHeight-120 && window.innerWidth < 550){
		title.style.display = 'none';
	} else {
		title.style.display = 'block';
	}

	requestAnimFrame(eventListener);
}

eventListener();


var s = Snap("#menu-bar");
var topLine = s.rect(0, 0, 50, 8);
var midLine = s.rect(0, 15, 50, 8);
var botLine = s.rect(0, 30, 50, 8);

var snapMenuBar = s.group(topLine, midLine, botLine);



var colorChange = function(line, color){
	line.animate({fill: color}, 1000, function(){
		colorChange(line, color);
	});
};




