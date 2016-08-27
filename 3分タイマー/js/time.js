/**
 * Created by 1521168 on 2016/08/27.
 */
var count = 180;
var min = 0;
var sec = 0;
var stp = null ;
var i = 0;

function count_start(){
    i++;
    if(i === 1){
        stp = setInterval(count_down,1000);
    } else {
        alert("2度押し厳禁やで！");
        i = 0;
    }
}

//カウンドダウン表示
function count_down(){
    if(count === 1){
        var display = document.getElementById("default");
        display.innerHTML = "TIME UP!";
        clearInterval(stp);
    } else {
        count--;
        min = parseInt(count / 60);
        sec = count % 60;
        var count_down = document.getElementById("default");
        count_down.innerHTML = ("0"+min).slice(-2) +"：" + ("0"+sec).slice(-2);
    }
}

//ストップボタンクリック時のアクション
function count_stop(){
    clearInterval(stp);
    i = 0;
}

//リセットボタンクリック時のアクション
function count_reset(){
    count = 180;
    min = parseInt(count / 60);
    sec = count % 60;
    i = 0;
    var count_down = document.getElementById("default");
    count_down.innerHTML = ("0"+min).slice(-2) +"：" + ("0"+sec).slice(-2);
}

//ボタンイベント制御
window.onload = function(){
    var start = document.getElementById('start');
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    start.addEventListener('click',count_start, false);
    stop.addEventListener("click",count_stop, false);
    reset.addEventListener("click",count_reset,false);
}
