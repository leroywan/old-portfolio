---
layout: single-project
title:  "Type-Animation"
date:   2016-07-19 13:02:21 -0400
categories: project
type: Developer Tool
featured: true
pageurl: https://leroywan.github.io/demo/type-animation
github: https://github.com/leroywan/type-animation
thumbnail: ../assets/project-thumbnail/type-animation-icon.svg
tools: JavaScript
summary: |
  Type animation is a JavaScript library that will animate any line of text in your HTML code as if someone was typing it out live. This library can be used even by people without knowledge of JavaScript; all it takes to create an animation is by adding a css class "type-animation" and your text will be animated! You also have the option to enable a blinking cursor by adding another css class called "enable-cursor".

---
This little project started when I wanted to create an animation that imitate typing on a keyboard. Looking through the internet, I wasn't able to find one that accurately fit my needs so I decided to take on this task. Since I wanted this piece of code to be as versatile and lightweight as possible, I decided to exclude third party libraries and code it in vanilla JavaScript. 

<strong>My goals were simple:</strong>

<ul>
	<li>The animation executes with a CSS class</li>
	<li>Extra CSS is not needed for the blinker</li>
	<li>Add a .play() method to all event triggered elements</li>
	<li>Script supports callback functions</li>
	<li>User can set animation speed</li>
</ul>

I started with creating the simplest case for the animation which is to animate the content once a page loads. To my surprise, it didn't take long to create a solution that works for multiple classes without any bugs or glitches.

The process is as follows: 

<ol>
	<li>Loop through all elements with a "type-animation" class</li>
	<li>Hide the content within each element</li>
	<li>Create a function that would load a letter at an interval of time</li>
</ol>

<strong>The next part was much harder though...</strong>

Next I wanted to give the user more freedom by letting them play the animation whenever they want (right now the animation plays as the page loads). Since each element within the DOM tree is already an object with a set of properties, I thought that the best way would be to create a new node called "typeAnimation" with different properties that the .play() method could use when called. 

This method turned out to be very effective as the user could play the animation whenever they want within their own JavaScript file. To provide more flexability, I wanted to add an optional parameter within the .play() method for callback functions in the case the user wants to chain animations or attach other actions. This was difficult since it was hard to determine when the animation was actually done running because the animation is played through a number of frames (intervals) unlike a normal function that just runs from top to bottom. 

<strong>Finally, the blinking cursor</strong>

With another CSS class named "enable-cursor" that enables the blinking cursor, I looped through the elements and inserted a snippet of CSS within a stylesheet that I created within my js file. Usually, this would not work very well since the CSS could easily be overridden. However, since a blinking cursor is different in that it animates an :after pseudoclass, the JavaScript stylesheet worked quite well. 


<strong>Final thoughts...</strong>

Although some parts of the code weren't as elegant as I hoped, this little animation worked really well with my websites and definitely made it stand out a bit more. The biggest takeaway after working on this project is my appreciation for modular programming and how it makes a huge difference in terms of code cleaniness and reusability. 