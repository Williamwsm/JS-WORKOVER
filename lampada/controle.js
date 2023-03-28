function on(){
    document.getElementById("lamp").src = "on.jpg";
}
function off(){
    document.getElementById("lamp").src = "off.jpg";
}
function blink(){
var intervalo =0;
var cont =0;
while(cont<10){
    intervalo += 100;
    setTimeout(" document.getElementById('lamp').src = 'on.jpg';",intervalo);
    intervalo += 100;
    setTimeout(" document.getElementById('lamp').src = 'off.jpg';",intervalo);
    cont++;
}
}