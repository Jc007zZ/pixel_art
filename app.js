var color = 'black'


for (i = 1; i <= 289; i++) {
    document.querySelector('main.quadro').innerHTML += ` <div class="cubo" id="${i}" onclick="pintar('${i}')"></div> `
    console.log(i)
}

function cor(COR) {
    color = COR
    console.log(color)
    document.getElementById('cor').style.background = COR

}
function pintar(id) {

switch(color){
    case 'black':
    document.getElementById(id).style.background = 'black'
    break;
    case 'white':
        document.getElementById(id).style.background = 'white'
        
}

}

function limpar() {
    for (i = 1; i <= 289; i++) {
        document.getElementById(`${i}`).style.background = 'white'

    }
}