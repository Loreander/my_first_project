let onFlag;
const tickDelay = 1000;
var audio = new Audio("timerAudio.mp3")


function incrementSeconds(){
    if(currentSeconds()==59){
        incrementMinutes()
        setSeconds('00')       
    }

    else {
        seconds = currentSeconds();
        seconds += 1;
        if(seconds < 10){
            seconds = '0'+seconds.toString()
    }
    setSeconds(seconds);}
}

function decrementSeconds() {
    if(currentSeconds()==0){
        setSeconds(59)
    }

    else {
        seconds = currentSeconds();
        seconds -= 1;
        if(seconds < 10){
            seconds = '0'+seconds.toString()
    }

    setSeconds(seconds);}

    if(currentSeconds()==0 && currentHours()==0 && currentMinutes()==0){
        audio.play();
    }
}


function incrementMinutes(){

    if(currentMinutes()==59){
        incrementHours()
        setMinutes('00')       
    }

    else {
        minutes = currentMinutes();
        minutes += 1;
        if(minutes < 10){
            minutes = '0'+minutes.toString()
        }
        setMinutes(minutes);
    }
}



function decrementMinutes() {
    if(currentMinutes()==0){
       setMinutes(59);
    }

    else {
        minutes = currentMinutes();
        minutes -= 1;
        if(minutes < 10){
            minutes = '0'+minutes.toString()
        }
        setMinutes(minutes);
    }
}

function incrementHours(){
    if(currentHours()==12){
        alert("We aren't going to set a 13 hour timer.....")
    }

    else {
        hours = currentHours();
        hours += 1;
        if(hours < 10){
            hours = '0'+hours.toString()
        }

        setHours(hours)
    }
}

function decrementHours() {
    if(currentHours()==0){
        setHours(12)
    }

    else {
        hours = currentHours();
        hours -= 1;
        if(hours < 10){
            hours = '0'+hours.toString()
        }
        setHours(hours);
    }
}


function tickDown(){
    if(currentSeconds()==0 && currentMinutes()==0 && currentHours()==0){
        stop();
    }

    else if(currentSeconds()==0 && currentMinutes()==0 && currentHours()>0){
        borrowHour();
    }

    else if(currentSeconds()==0){
        borrowMinute();
    }

    else if(currentSeconds()>0 && onFlag == true){
        decrementSeconds();
        setTimeout(tickDown, tickDelay);
    }
}


function start(){
    onFlag = true;
    setTimeout(tickDown, tickDelay);
}

function stop(){
    onFlag = false;
}

function restart(){
    setSeconds('00');
    setMinutes('00');
    setHours('00');
    stop();
}

function borrowMinute(){
    decrementMinutes();
    setSeconds('59');
    setTimeout(tickDown, 1000);
}

function borrowHour(){
    decrementHours();
    setSeconds('59');      
    setMinutes('59');
    setTimeout(tickDown, 1000);
}

function currentSeconds(){
    let seconds = Number(document.getElementById("seconds").getAttribute("placeholder"))
    return seconds;
}

function currentMinutes() {
    return Number(document.getElementById("minutes").getAttribute("placeholder"));
}

function currentHours() {
    return Number(document.getElementById("hours").getAttribute("placeholder"));
}

function setSeconds(setValue){
    document.getElementById("seconds").setAttribute("placeholder", setValue)
}

function setMinutes(setValue){
    document.getElementById("minutes").setAttribute("placeholder", setValue)
}

function setHours(setValue){
    document.getElementById("hours").setAttribute("placeholder", setValue)
}