let timer; //hora
let dmy; //data


function start () {
    timer = setInterval(showTime, 1000);
    dmy = setInterval(showDate, 1000);    
}
function stop () {
    clearInterval(timer);
    clearInterval(dmy);    
}
function showTime () {    
    let d = new Date();
    let h = (d.getHours() <=9)? '0'+d.getHours(): d.getHours();
    let m = (d.getMinutes() <=9)? '0'+d.getMinutes(): d.getMinutes();
    let s = (d.getSeconds() <=9)? '0'+d.getSeconds(): d.getSeconds();
    let hours = h+':'+m+':'+s;
    document.querySelector('#hours').innerHTML = hours;   
}
function showDate () {
    let d = new Date();
    let year = d.getFullYear();
    let month = (d.getMonth() <=9)? '0'+d.getMonth(): d.getMonth();
    let monthAux = month;
    let monthText;    
    
    if (monthAux == 0) {
        monthText = 'Janeiro';
    } else if (monthAux == 1) {
        monthText = 'Fevereiro';
    } else if (monthAux == 2) {
        monthText = 'Março';
    } else if (monthAux == 3) {
        monthText = 'Abril';
    } else if (monthAux == 4) {
        monthText = 'Maio';
    } else if (monthAux == 5) {
        monthText = 'Junho';
    } else if (monthAux == 6) {
        monthText = 'Julho';
    } else if (monthAux == 7) {
        monthText = 'Agosto';
    } else if (monthAux == 8) {
        monthText = 'Setembro';
    } else if (monthAux == 9) {
        monthText = 'Outubro';
    } else if (monthAux == 10) {
        monthText = 'Novembro';
    } else if (monthAux == 11) {
        monthText = 'Dezembro';
    }
    
    let day = (d.getDate() <=9)? '0'+d.getDate(): d.getDate();
    let date = 'Hoje é dia '+day+' de '+monthText+' de '+year+'.';
    document.querySelector('#date').innerHTML = date;
}
