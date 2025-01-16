let turnOn = document.getElementById('turnOn')
let turnOff = document.getElementById('turnOff')
let Lamp = document.getElementById('Lamp')


function lampBreak (){
    Lamp.src = 'img/quebrada.jpg'
}
function LampOn (){
    Lamp.src = 'img/ligada.jpg';
}
function LampOff (){
    Lamp.src = 'img/desligada.jpg'
}

turnOn.addEventListener('click', LampOn )
turnOff.addEventListener('click', LampOff)
Lamp.addEventListener('mouseover', LampOn)
Lamp.addEventListener('mouseleave', LampOff)
Lamp.addEventListener('dblclick', lampBreak)