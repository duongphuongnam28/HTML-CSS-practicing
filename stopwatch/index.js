let [seconds, minutes, hours] = [0, 0, 0]
let time = document.getElementById('time')
let timer = null

function stopwatch(){
    seconds++
    if(seconds == 60){
        seconds = 0
        minutes++
        if(minutes == 60){
            minutes = 0
            hours++
            if(hours == 24){
                hours = 0
            }
        }
    }

    let h = hours < 10 ? '0' + hours : hours
    let m = minutes < 10 ? '0' + minutes : minutes
    let s = seconds < 10 ? '0' + seconds : seconds

    time.innerHTML = h + ':' + m + ':' + s
}

function running(){
    if(timer != null){
        clearInterval(timer)
    }
        
    timer = setInterval(stopwatch, 1000)
}

function stop(){
    clearInterval(timer)
}

function reset(){
    seconds = 0
    minutes = 0
    hours = 0
    clearInterval(timer)
    time.innerHTML = '00:00:00'
}