"use strict";
 
drawnName();
 
function
   drawnName(){
 
   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");
 
//black background
function Drawbackground(){      
 
   context.beginPath();
   context.fillstyle="black";
   context.rect(75,75,300,300);
   context.fill();
 
}
Drawbackground();
 
//bright green space invader
 
  
   context.beginPath();
   context.fillStyle = "#66ff00";
   context.fillRect(100,150,50,50);
   context.fillRect(200,150,50,50);
   context.fillRect(300,150,50,50);
   context.fillRect(150,200,150,50);
   context.fillRect(150,250,50,50);
   context.fillRect(250,250,50,50);
   context.fill();

 }
