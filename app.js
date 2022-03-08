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
//-use previous timer to make rest timer that runs between each interval timer
//-enable selection of seconds or minutes
//enable interval and rest lengths to be mixed sec/min
//enable timer to visibly display passing seconds even when units are minutes
//make it look pretty

let startButton = document.getElementById("start")
let stopButton = document.getElementById("stop")
let resetButton = document.getElementById("reset")
let speed

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
let totalIntLength
let intUnit

//rest interval variables
let restTimer = document.getElementById("restTimer")
let restCount = 0
let restLength
let restStartVar
let restUnit


function myCounter(){
    intQty = document.getElementById("qty").value
    intLength = Number(document.getElementById("length").value) //use ternary operator to determine impact of units here? (sec?value:value x 60)
    restIntLength = Number(document.getElementById("restLength").value)
    totalIntLength = intLength + restIntLength
//should I pull out the timing functionality for what is displayed and have it run asynchonously from what is tracking intervals?
    if (intQtyCount < intQty){

        if (timeCount < intLength -1){
        timeCount++;
        intTimer.innerText = timeCount;
        restTimer.innerText = restCount; //this resets rest timer at this moment to display zero in a correct visual way
        audioOne.play();
        } else if (timeCount == intLength -1){
        audioTwo.play();
        timeCount++;
        intTimer.innerText = timeCount;
        } else if (timeCount < totalIntLength-1){
            restCount++;
            timeCount++
            restTimer.innerText = restCount;
            audioOne.play();
        } else if (timeCount == totalIntLength-1){
            audioTwo.play();
            restCount++
            restTimer.innerText = restCount;
            restCount = 0
            timeCount = 0
            totInts.innerText = ++intQtyCount
        } else {
            console.log("error")
        }

        //can I force the loop to wait till the restCounter is finished before looping again with 
        //Promises? Forced Synchronicity? 

    } else {
        stopTimer()
        timeCount = 0
        intQtyCount = 0
    }
}

function startTimer(){
    intUnit = document.getElementById("intUnit").value
    // restUnit = document.getElementById("restUnit").value
    if(intUnit == "min"){ //this produces an error after running the first loop
        speed = 60000
    }else {speed = 1000}
console.log(speed)
    startVar = setInterval(myCounter, speed)
}

function stopTimer(){
clearInterval(startVar)
}

function resetOutputs(){
    intQtyCount = 0
    totInts.innerText = 0
    timeCount = 0
    intTimer.innerText = 0;
    restCount = 0
    restTimer.innerText = 0;

}


startButton.addEventListener("click", startTimer)
stopButton.addEventListener("click", stopTimer)
resetButton.addEventListener("click", resetOutputs)
