var color = 'black'
let apertou
let corEscolhida

for (i = 1; i <= 289; i++) {
    document.querySelector('main.quadro').innerHTML += ` <div class="cubo" id="${i}" onmousedown="pintar(${i})" onmouseenter="PINTAR('${i}')" ></div> `
    console.log(i)
}

document.querySelector('.quadro').addEventListener('mousedown', function apertado() { apertou = true 
    console.log(apertou)
});

document.querySelector('.quadro').addEventListener('mouseup', function apertado() { apertou = false 
    console.log(apertou)
});


function cor(COR) {
    color = COR
    console.log(color)
    document.getElementById('cor').style.background = COR
    
}

function PINTAR(id) {
    if ( apertou == true) {

        switch(color){
            case 'black':
        document.getElementById(id).style.background = 'black'
        break;
        case 'white':
            document.getElementById(id).style.background = 'white' 
            break;
    }
}
}


function pintar(id) {
    switch(color){
    case 'black':
    document.getElementById(id).style.background = 'black'
    break;
    case 'white':
        document.getElementById(id).style.background = 'white'
        break;
}
}

function criarCor() {
    corEscolhida = document.getElementById('criarCor').value
    document.getElementById('cor').style.background = corEscolhida
    document.querySelector
}

function limpar() {
    for (i = 1; i <= 289; i++) {
        document.getElementById(`${i}`).style.background = 'white'

    }
}