// Add cursor css 
var cursorAnim = ".enable-cursor:after {\
	content: '|';\
}\
@keyframes blink{\
    from { opacity: 1 }\
    to { opacity: 0 }\
}\
@-webkit-keyframes blink{\
    from { opacity: 1 }\
    to { opacity: 0 }\
}\
@-moz-keyframes blink{\
    from { opacity: 1 }\
    to { opacity: 0 }\
}";

var head = document.getElementsByTagName('head')[0];
var styleTag = document.createElement("style");
styleTag.title = 'type-animation';
styleTag.type = "text/css";
styleTag.appendChild(document.createTextNode(cursorAnim));
head.appendChild(styleTag);

var styleSheet = styleTag.sheet;


// create function to animate typing
var animateTyping = function(element, animatedContent, speed, callback){
	var callback = callback || false;
	var displayStyle = element.style.display; // determines if inline, inline-block, or block;
	element.style.display = 'none'; 		  // hides display to prevent text from showing on load
	var animatedContent = animatedContent;    // gets the content within the tag to be animated	 
	var typeSpeed = speed;
	var content = "";						  // create initial content that will be displayed 
	var i = 0;


	// Start iterating and displaying each letter from the content
	var timerID = window.setInterval(function(){

		// apply styles and stop animation when the animation is completed (when an undefined value is reached)
		if (animatedContent[i] == undefined) {
			clearInterval(timerID);
			element.typeAnimation.animationPlayState = true;
			//select specific tags and apply blinking animation after the type-animation is completed
			var elementClassName = element.className.replace(' ', '.');
			if (element.id) {
				// document.styleSheets[0].insertRule('#'+ element.id + '.enable-cursor::after { animation: blink 1.2s infinite; };', 1);
				styleSheet.insertRule("#" + element.id + ".enable-cursor::after { animation: blink 1.2s infinite }", 1);
			}else{
				styleSheet.insertRule("." + elementClassName + ".enable-cursor::after { animation: blink 1.2s infinite }", 1);
			}
			
			if (callback) {
				return callback();
			}else{
				return
			}
			
		// if the animation is not over...
		} else {

			//select the specific tag and paused blinking animation until type-animation is completed
			var elementClassName = element.className.replace(' ', '.');
			
			// create a way to escape special characters
			if (animatedContent[i] == '\\'){
				if(animatedContent[i+1] == '`'){
					content = content + '`';
				}else if(animatedContent[i+1] == '@'){
					content = content + '@';
				}
				element.innerHTML = content;
				i = i + 2;

			// if special characters are located, add neccessary functionality
			} else {
				if (animatedContent[i] == '`') {
					content = content + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
				} else if (animatedContent[i] == '@') {
					content = content + '<br>';
				}else{
					// add the next letter to the content of the tag being animated
					content = content + animatedContent[i];
				}
				element.innerHTML = content;
				i++;	
			}

			// reveal the animated content
			element.style.display = displayStyle;
		}
	}, typeSpeed);

}





// get an array of elements that have the class 'type-animation' default
var normalTags = document.getElementsByClassName('type-animation');
if (normalTags) {
	for (var j=0; j<normalTags.length; j++){

		normalTags[j].typeAnimation = {
			element: normalTags[j],
			content: normalTags[j].innerHTML,
			display: normalTags[j].style.display,
			animationPlayState: true
		}
		animateTyping(normalTags[j].typeAnimation.element, normalTags[j].typeAnimation.content, 60);
	}
}

var fastTags = document.getElementsByClassName('type-animation-fast');
if (fastTags) {
	for (var j=0; j<fastTags.length; j++){

		fastTags[j].typeAnimation = {
			element: fastTags[j],
			content: fastTags[j].innerHTML,
			display: fastTags[j].style.display,
			animationPlayState: true
		}
		animateTyping(fastTags[j].typeAnimation.element, fastTags[j].typeAnimation.content, 30);
	}
}


var slowTags = document.getElementsByClassName('type-animation-slow');
if (slowTags) {
	for (var j=0; j<slowTags.length; j++){
		
		slowTags[j].typeAnimation = {
			element: slowTags[j],
			content: slowTags[j].innerHTML,
			display: slowTags[j].style.display,
			animationPlayState: true
		}
		animateTyping(slowTags[j].typeAnimation.element, slowTags[j].typeAnimation.content, 90);
	}	
}

// get an array of elements that have the class 'type-animation-triggered'
var triggeredTags = document.getElementsByClassName('type-animation-trigger');
if (triggeredTags) {
	for (var j=0; j<triggeredTags.length; j++){
		triggeredTags[j].typeAnimation = {
			element: triggeredTags[j],
			content: triggeredTags[j].innerHTML,
			display: window.getComputedStyle(triggeredTags[j]).getPropertyValue('display'),
			animationPlayState: true,
			play: function(speed, callback){
				if (this.animationPlayState){
					this.animationPlayState = false;
					speed = speed || 60;
					this.element.style.display = this.display;
					animateTyping(this.element, this.content, speed, callback);
				} else {
					return
				}
			}
		}
		triggeredTags[j].style.display = 'none';
	}
}


// get array of elements that are triggered once
var triggeredOnceTags = document.getElementsByClassName('type-animation-trigger-once');
if (triggeredOnceTags) {
	for (var j=0; j<triggeredOnceTags.length; j++){
		triggeredOnceTags[j].typeAnimation = {
			element: triggeredOnceTags[j],
			content: triggeredOnceTags[j].innerHTML,
			display: window.getComputedStyle(triggeredOnceTags[j]).getPropertyValue('display'),
			animationPlayState: false,
			play: function(speed){
				speed = speed || 60;
				if (this.animationPlayState === false){
					this.element.style.display = this.display;
					animateTyping(this.element, this.content, speed);
					this.animationPlayState = true;
				}else {
					return
				}
			}
		}
		triggeredOnceTags[j].style.display = 'none';
	}
}








