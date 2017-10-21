// JavaScript Document
var hitwall = true;

function checkbounds(bounds){
	"use strict";
	bounds.forEach(function(bound){
		bound.onmouseover = function(){
			bound.setAttribute("class","boundary youlose");
			hitwall = true;
			bounds[bounds.length-1].setAttribute("class","boundary example");
		};
	});
	
}

function init(){
	"use strict";
	var boundary = document.querySelectorAll(".boundary");
	checkbounds(boundary);
	
	var start = document.getElementById("start");
	start.onclick = function(){
		boundary.forEach(function(bound){
				bound.setAttribute("class","boundary");
				boundary[boundary.length-1].setAttribute("class","boundary example");
		 });
		hitwall = false;
		document.getElementById("status").innerHTML= "Move throught the maze";
	};
	start.onmouseover = function(){
		hitwall=false;
	};
	
	var finish = document.getElementById("end");
	finish.onmouseover = function(){
		if(hitwall === false){
			document.getElementById("status").innerHTML= "You Win";
		}
	};
	finish.onmouseout = function(){document.getElementById("status").innerHTML= "Click S to restart";};
	
	var maze = document.getElementById("maze");
	maze.onmouseleave = function(){
		hitwall = true;
		boundary.forEach(function(bound){
				bound.setAttribute("class","boundary youlose");
		 });
		boundary[boundary.length-1].setAttribute("class","boundary example");
		
	};
}

window.addEventListener("load",init);