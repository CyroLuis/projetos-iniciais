const imagem = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0
let IntervalId = null

const trafficlight = (event) => {
    stopAutomatic()
     turnOn [event.target.id]();
    
}

const nexIndex =  () => colorIndex = colorIndex < 2 ? ++colorIndex:0

const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nexIndex()
}

const stopAutomatic = () => {
    clearInterval(IntervalId)
}
const turnOn = {
    'red'      :  () => imagem.src = './img/vermelho.png',
    'yellow'   :  () => imagem.src = './img/amarelo.png',
    'green'    :  () => imagem.src = './img/verde.png',
    'automatic':  () => IntervalId = setInterval(changecolor, 1000),
    
}


buttons.addEventListener('click', trafficlight)

