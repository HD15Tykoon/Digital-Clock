/**
 ** Author: Harsh Dagar
 ** Lang: JS, ES6, jQuery
 ** Date Created: 20/Jan/2019       Date Modified: 21/Jan/2019
 */
var data,hour,min,sec,period;
var haveFullFormat=true;
$('#time').on('click',()=>{
    return haveFullFormat=true?!haveFullFormat:!haveFullFormat;
});
const randomColor=()=>{
var letters = '0123456789ABCDEF',color="#";
for(let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
}
return color;
}

var head=document.getElementById('head');
head.addEventListener('mouseover',()=>{
    clockAnimate();
    headAnimate();
});
const headAnimate=()=>{
    setInterval(()=>{head.style.background = 'linear-gradient('+randomColor()+','+randomColor()+','+randomColor()+')';
    head.style.width='100%';
},300);
}
const clockAnimate=()=>{
    var clock = document.getElementById('clock');
    setInterval(()=>{
    clock.style.backgroundColor=randomColor();
    clock.style.opacity='0.6';
    },1000);
    clock.style.opacity='1';
}
const getTime=()=>{
    data=new Date();
    hour=data.getHours();
    min=data.getMinutes();
    sec=data.getSeconds();
}

const twelveHourFormat = ()=>{
    getTime();
    period=hour<12?" AM":" PM";
    hour=hour-12<10?'0'+(hour-12).toString():hour-12;
    min=min<10?'0'+min.toString():min;
    sec=sec<10?'0'+sec.toString():sec;
    $('#inter').html(period);
}

const twentyFourHourFormat=()=>{
    getTime();
    hour=hour<10?'0'+hour.toString():hour;
    min=min<10?'0'+min.toString():min;
    sec=sec<10?'0'+sec.toString():sec;
    $('#inter').empty();
}


setInterval(()=>{
    if(!haveFullFormat){
        twelveHourFormat();
    }else{
        twentyFourHourFormat();
    }
    $('#hour').text(hour);
    $('#min').text(min);
    $('#sec').text(sec);
    fullAnimate();
},1000);


const fullAnimate=()=>{
    $('#sec').animate({"marginTop":"-100px","opacity":"0"},0);
    $('#sec').animate({"opacity":"1"},850);
}