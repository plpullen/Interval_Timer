//have timer running when page loads
//start timer with start button
//stop timer with stop button
//make timer count a specific amount of time
//make timer count the inputted amount of time
//make timer count the amount of time in a loop
//make timer loop a certain amount of times
//make program record number of intervals
//make program to stop with completion of certain number of intervals too
//use previous timer to make rest timer that runs between each interval timer

let startButton = document.getElementById("start")
let stopButton = document.getElementById("stop")
let visTimer = document.getElementById("timer")
let counter = 0
let startVar

function myCounter(){
    counter++
    visTimer.innerText = counter
    }

function startTimer(){
    startVar = setInterval(myCounter, 1000)
}

function stopTimer(){
clearInterval(startVar)
}



startButton.addEventListener("click", startTimer)
stopButton.addEventListener("click", stopTimer)