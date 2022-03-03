//-have timer running when page loads
//-start timer with start button
//-stop timer with stop button
//-make timer count a specific amount of time and stop
//-make timer count up to the inputted amount of time then reset internally to 0 and stop
//-make timer play a tone at each sec.
//-make timer play a different tone when the time is reached.
//-make timer loop a certain amount of times for designated intervals
//-make timer display the number of times in a loop
//-make program to stop automatically with completion of certain number of loops 
//-make reset button to return outputs to '0'
//use previous timer to make rest timer that runs between each interval timer
//enable selection of seconds or minutes
//make it look pretty

let startButton = document.getElementById("start")
let stopButton = document.getElementById("stop")
let resetButton = document.getElementById("reset")

//regular interval variables
let intTimer = document.getElementById("timer")
let totInts = document.getElementById("completedIntervals")
let timeCount = 0
let startVar
let intLength
let audioOne = new Audio('edited_pop.mp3')
let audioTwo = new Audio('long_pop.mp3')
let intQty
let intQtyCount = 0

//rest interval variables
let restTimer = document.getElementById("restTimer")
let restCount = 0
let restLength
let restStartVar


function restCounter(){
    restLength = document.getElementById("restLength").value
        if (restCount < restLength -1){
        restCount++;
        restTimer.innerText = restCount;
        audioOne.play();
        } else {
        audioTwo.play();
        restCount++;
        restTimer.innerText = restCount;
        restCount = 0
        clearInterval(restStartVar)
       }
    }

function myCounter(){
    intQty = document.getElementById("qty").value
    intLength = document.getElementById("length").value
    if (intQtyCount < intQty){
        if (timeCount < intLength -1){
        timeCount++;
        intTimer.innerText = timeCount;
        audioOne.play();
        } else {
        audioTwo.play();
        timeCount++;
        intTimer.innerText = timeCount;
        timeCount = 0
        totInts.innerText = ++intQtyCount
        restStartVar = setInterval(restCounter,1000)
        //how do I force the loop to wait till the restCounter is finished before looping again?
        }
    } else {
        stopTimer()
        timeCount = 0
        intQtyCount = 0
    }
}

function startTimer(){
    startVar = setInterval(myCounter, 1000)
}

function stopTimer(){
clearInterval(startVar)
}

function resetOutputs(){
    intQtyCount = 0
    totInts.innerText = 0
    timeCount = 0
    intTimer.innerText = 0;
}


startButton.addEventListener("click", startTimer)
stopButton.addEventListener("click", stopTimer)
resetButton.addEventListener("click", resetOutputs)
