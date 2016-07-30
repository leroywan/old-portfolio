---
layout: single-project
title:  "Cliff Game"
date:   2016-07-12 13:02:21 -0400
categories: project
type: Game
pageurl: http://leroywan.github.io/CliffGame
github: https://github.com/leroywan/CliffGame
featured: true
thumbnail: ../assets/project-thumbnail/mr_square.svg
tools: JavaScript, HTML5(Canvas), CSS3, Adobe Illustrator
summary: |
  Dodge the clouds, get the hearts, and try to last as long as possible down your freefall. The game starts with Mr.Square in the middle of a freefall and your objective is to dodge the clouds by using the arrow keys. Clouds and hearts are generated randomly and Mr.Square will fall faster and faster as the game progresses until he reaches terminal velocity. Distance and lives are recorded on the top of the screen so try to beat your own high score!
---
This was the first big project I built to learn more about programming in general. I thought that a game would be fun to build and would also let me learn more about object oriented programming. The idea of the game came one day after I played a very slow and boring game which motivated me to make something that is quick and easy to play. 

After researching different ways of building games, the simplest way I found was to use an HTML5 canvas and animate my objects using requestAnimationFrame which loops through each frame recursively.

<strong>How I approached making this game:</strong>

<ol>
	<li>Use requestAnimFrame to draw each frame</li>
	<li>Create an object for the main character</li>
	<li>Create an object for the clouds and hearts</li>
	<li>Add properties X, Y, lives, speed for character</li>
	<li>Add draw method for all objects</li>
	<li>Create funciton for collision detection per frame</li>
	<li>Create logic for what happens after collision</li>
</ol>


Although the list is rather short, I dedicated a whole month to complete this project and I am very happy with the final product. This game was the project that got me addicted to programming and really opened up a new world for me in terms of bringing my ideas to life. Now I only look forward to all the exciting things that I can build with my programming powers! (: