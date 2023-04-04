const turnOn = document.getElementById ("turnOn");
const turnOff = document.getElementById ("turnOff");
const lamp = document.getElementById ("lamp")
function stop (){
    return lamp.src.indexOf ('animacao') > -1
}
function lampOn () { 
    if ( !stop() ) {
lamp.src= 'img/ligada.jpg '
    }
   
}
function lampOff () {
    if ( !stop() ) { 
    lamp.src= 'img/desligada.jpg'
    }
}
function anima() {
    lamp.src= 'img/animacao.gif'

}

turnOn.addEventListener ( 'click' , lampOn );
turnOff.addEventListener ('click' , lampOff);
lamp.addEventListener('mouseover', lampOn );
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', anima);