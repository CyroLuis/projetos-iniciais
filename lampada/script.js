const turnOnOff = document.getElementById ("turnOnOff");
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

function lampOnOff(){
    if(turnOnOff.textContent == 'Ligar'){
        lampOn()
        turnOnOff.textContent = 'Desligar'
    } else {
        lampOff()
        turnOnOff.textContent = 'Ligar'
    }
}

turnOnOff.addEventListener ( 'click' , lampOnOff );


lamp.addEventListener('mouseover', lampOn );
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', anima);