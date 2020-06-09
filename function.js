var heartMeterButton = document.getElementById("heart-button");
var clockDisplay =document.getElementById("time");
var heartDisplay = document.getElementById("rate");
var timeButton = document.getElementById("time-button");

var blackColor=document.getElementById("black");
var redColor=document.getElementById("red");
var purpleColor=document.getElementById("purple");
var blueColor=document.getElementById("blue");
var pinkColor=document.getElementById("pink");

var watchImg =document.getElementsByClassName("watch-img")[0];
console.log(watchImg);

//heartmeter display
heartMeterButton.addEventListener('click',function(){
    clockDisplay.style.display='none';
    heartDisplay.style.display='block';
})
//time display

timeButton.addEventListener('click', function(){
    heartDisplay.style.display='none';
    clockDisplay.style.display='block';

})

//change color of watch

blackColor.addEventListener('click',function(){
    watchImg.src="./assets/blackwatch.png";
})

redColor.addEventListener('click',function(){
    watchImg.src="./assets/redwatch.png";
})

purpleColor.addEventListener('click',function(){
    watchImg.src="./assets/purplewatch.png";
})

blueColor.addEventListener('click',function(){
    watchImg.src="./assets/bluewatch.png";
})

pinkColor.addEventListener('click',function(){
    watchImg.src="./assets/creamwatch.png";
})
setInterval(function(){
    time.innerText = "" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(); 
},1000)