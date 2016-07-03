var scrollingHeader = document.getElementsByClassName('scrolling-header');



var currentPos = 0;
var listenForScroll = function(header) {

	setInterval(function(){
		if(window.innerWidth < 420){

		} else {
			var height = window.getComputedStyle(header, null).getPropertyValue("height");

			var newPos = window.pageYOffset;

			if (newPos >= currentPos + 5){
				// Do something when user scrolls down
				showHeader(header, height);
				
				currentPos = newPos - 5;
			}else{
				// Do something when user scrolls up
				hideHeader(header, height);
			
				currentPos = newPos + 5;
			}	
		}
		
	}, 50)

}

var showHeader = function(header, height){
	header.style.top = "-" + height;
}

var hideHeader = function(header, height){
	header.style.top = 0;
}

var headerItem;
for (var i=0; i < scrollingHeader.length; i++){
	headerItem = scrollingHeader[i];

	listenForScroll(headerItem);

}
