let element = document.getElementById("timer");
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let tracker = 0

start.onclick = ()=>{
    let length = document.getElementById("length").value;
    let goal = document.getElementById("goal")

    setInterval(function(){
    element.innerHTML = '00:'+length;
    length--

    if (length < 1) {
    length = document.getElementById("length").value;
    }
    tracker++

    if (tracker=goal){
        clearInterval(counter)
    }
    }, 1000)
}


// stop.onclick = ()=>{
//     clearInterval(myInterval)
// }



// function timer(){
//     var sec = 30;
//     var timer = setInterval(function(){
//         document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
//         }
//     }, 1000);