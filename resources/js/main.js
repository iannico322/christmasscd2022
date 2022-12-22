
$(window).on('load',function(){
    $(".loading").fadeOut(2000);
    
    $(".container").fadein(1000);
})
let music = document.querySelector(".music")
music.play();



function christmasCountDown(){
var targetDate = new Date("December 25, 2022");
var currentDate = new Date();
var distance = targetDate - currentDate;


var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.querySelector(".days").innerHTML = (days < 10 ? "0" : "") + days + ":";
document.querySelector(".hours").innerHTML = (hours < 10 ? "0" : "") + hours + ":" ;
document.querySelector(".minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes + ":";
document.querySelector(".seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;


if(distance < 00){
    
    
   
    
    document.querySelector(".label").innerHTML = "Merry Christmas"
    document.querySelector(".fire-display").style.display = "block";
    var greet = document.querySelector(".countdown")
    greet.className += " greet"
    greet.innerHTML = "Caulin Family";
    
    setTimeout(function() {
        music.src = "./resources/media/audio/alliwant.mp3"     
        music.play()     
        console.log("sing")            
    }, 1000);
                     
   


}
}
setInterval( christmasCountDown, 1000);
// Update the countdown element on the page






