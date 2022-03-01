//-have timer running when page loads
//-start timer with start button
//-stop timer with stop button
//-make timer count a specific amount of time and stop
//-make timer count up to the inputted amount of time then reset internally to 0 and stop
//-make timer play a tone at each sec.
//-make timer play a different tone when the time is reached.
//make timer loop a certain amount of times
//make timer count the amount of times in a loop
//make program record number of intervals
//make program to stop with completion of certain number of intervals too
//use previous timer to make rest timer that runs between each interval timer

let startButton = document.getElementById("start")
let stopButton = document.getElementById("stop")
let visibleTimer = document.getElementById("timer")
let counter = 0
let startVar
let goal
let audioOne = new Audio('edited_pop.mp3')
let audioTwo = new Audio('long_pop.mp3')

function myCounter(){
    goal = document.getElementById("goal").value
    counter++;
    visibleTimer.innerText = counter;
    if(counter == goal){
    audioTwo.play();
    counter = 0
        stopTimer()
    } else {
    audioOne.play();
    }
    }

function startTimer(){
    startVar = setInterval(myCounter, 1000)
}

function stopTimer(){
clearInterval(startVar)
}



startButton.addEventListener("click", startTimer)
stopButton.addEventListener("click", stopTimer)