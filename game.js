var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result")
var tank = document.getElementById("tank")
var score =  document.getElementById("score")
var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")

blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
   
    counter++
    var phrases = document.getElementById('phrases')
var highphrases =['OP Bro','Hurray!!','Your license is ready','Well played','Damn good Driver']
var lowphrases = ['Do better next time','Hard Luck','Learn driving first','I am Disappointed','You need to Practice']

if(counter>15){
    phrases.innerHTML=highphrases[Math.floor(Math.random()*5)]
}
else{
    phrases.innerHTML=lowphrases[Math.floor(Math.random()*4)]
}

})
myAudio = new Audio('./assets/sound-effect-hd1.mp3');
myAudio.loop = true;
myAudio.play()
newaudio = new Audio('./assets/crash.mp3')
tank.addEventListener("animationiteration", function(){
    var opt = ((Math.floor(Math.random()*3))*130)
    tank.style.left = opt + "px";
})
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
box1.onclick = movecarleft
box2.onclick = movecarright
function movecarright(){
     var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
    if(raceCarLeft < 240){raceCar.style.left = (raceCarLeft + 130) + "px"}
jumpsound.play()
}

function movecarleft(){
   
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if(raceCarLeft > 0){raceCar.style.left = (raceCarLeft - 130) + "px"
        jumpsound.play()

}}


window.addEventListener("keydown", function(e){
   if(e.keyCode == "39"){ var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
    if(raceCarLeft < 240){raceCar.style.left = (raceCarLeft + 130) + "px"}
    jumpsound.play()
};

    if(e.keyCode == "37"){
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if(raceCarLeft > 0){raceCar.style.left = (raceCarLeft - 130) + "px"
        jumpsound.play()
    }

    }
})


setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    var tankTop = parseInt(window.getComputedStyle(tank).getPropertyValue("top"))
    var tankLeft = parseInt(window.getComputedStyle(tank).getPropertyValue("left"));
    var tankLeft = parseInt(window.getComputedStyle(tank).getPropertyValue("left"));
    var timerover = document.getElementById('gametime')
        if((blueCarLeft === raceCarLeft) && (blueCarTop > 440) && (blueCarTop < 640) || (tankLeft === raceCarLeft) && (tankTop > 380) && (tankTop < 640)){
            result.style.display = "block";
            game.style.display = "none";
           timerover.style.display="none"
           newaudio.play()
           myAudio.pause()
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)
let seconds=0;
var timer = setInterval(function () {
    seconds++;
    document.getElementById("timer").innerHTML = seconds;
},1000
)





