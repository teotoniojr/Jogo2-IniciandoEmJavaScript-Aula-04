// Carros
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 97, 150, 210, 265, 320]
let velocidadeCarros = [2.5, 3.2, 4.2, 6, 4.7, 3]
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostrarCarros() {
  for (let i = 0; i < imagensCarros.length; i++)
    image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
function movimentarCarro() {
  for (let i = 0; i < imagensCarros.length; i++)
  xCarros[i] -= velocidadeCarros[i];
}
function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagensCarros.length; i = i + 1){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}

// Adicionando mais carros, com as mesmas imagens

// Para adicionar mais carros, usando as mesmas imagens, vamos duplicar a informação que está dentro da lista de imagensCarro[i]
//  imagensCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
// Agora acresentamos as variavéis dentro das listas de coordenadas e velocidade xCarros[i], yCarros[i] e velocidadeCarros[i]

