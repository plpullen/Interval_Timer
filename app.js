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
let intTimer = document.getElementById("timer")
let totInts = document.getElementById("completedIntervals")
let counter = 0
let startVar
let length
let audioOne = new Audio('edited_pop.mp3')
let audioTwo = new Audio('long_pop.mp3')
let qty
let qtyCount = 0

function restCounter(){

}

function myCounter(){
    qty = document.getElementById("qty").value
    length = document.getElementById("length").value
    if (qtyCount < qty){
        if (counter < length-1){
        counter++;
        intTimer.innerText = counter;
        audioOne.play();
        } else {
        audioTwo.play();
        counter++;
        intTimer.innerText = counter;
        counter = 0
        totInts.innerText = ++qtyCount
        restCounter()
        }
    } else {
        stopTimer()
        counter = 0
        qtyCount = 0
    }
}

function startTimer(){
    startVar = setInterval(myCounter, 1000)
}

function stopTimer(){
clearInterval(startVar)
}

function resetOutputs(){
    qtyCount = 0
    totInts.innerText = 0
    counter = 0
    intTimer.innerText = 0;
}


startButton.addEventListener("click", startTimer)
stopButton.addEventListener("click", stopTimer)
resetButton.addEventListener("click", resetOutputs)
