# Jogo2-IniciandoEmJavaScript-Aula-04

## Instruções

### Colisão parte I - Importando Arquivo

* Para verificar a colisão do nosso ator com os carros, vamos importar da biblioteca do p5.
* Para isso va na aba "Ajuda" no canto superior da tela e clique em "Referência"
* Na página entrar na aba, no canto esquerdo da tela, "libraries"
* Procure por p5.collide2d e clique na imagem
* Você será direcionado para o GitHub, ali é só fazer o download dos arquivos no canto superior, escrito "code" depois "download zip"
* Extraia os arquivos em uma pasta, e carregue o arquivo p5.collide2d.js no seu programa
* Para carregar o arquivo, basta ir em "Arquivos do Esboço" e "Carregar Arquivo"
* Agora carregamos ele no index.html, assim como fizemos para os outros arquivos .js
* <script src="p5.collide2d.js"></script>

### Colisão parte II - Utilizando a função collideRectCircle

* Vamos criar uma função para verificar a colisão
* function verificaColisao (){}
* Com as instruções que podemos obter no GitHub, onde baixamos o código, vamos verificar como se dá a colisão dos nossos atores, que podem ser considerados um circulo e um retangulo
* Assim vamos em collideRectCircle() no arquivo e vemos as condições
* Criamos uma variável "let colisao = false" porque nosso personagem não colide com ninguém no começo
* collideRectCircle(x1, x2, width1, heigth1, cx, cy, diameter)
* Para a gente fazer a função verificar todos os carros, criamos um for(){}, para criar um loop
* Assim ficamos com
* function verificaColisao(){ for(let i = 0; i < imagensCarros.length; i++){ colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
* Agora criamos uma função para fazer o ator retornar ao inicio caso aconteça a colisão
* if (colisao){ colidiu() }
* function colidiu(){ yAtor = 368 (posição inicial) }

### Adicionar Pontos

* Para iniciarmos, vamos criar uma variável para guardar os pontos "let meusPontos = 0"
* Agora criamos uma função para incluir os pontos na tela "function incluiPontos(){}"
* Usamos o comando text(meusPontos, posiçãoX, posiçãoY) para escrever na tela
* chamamos a função no sketch.js
* Usamos textSize(tamanho) para aumentar o tamanho
* Usamos textAlign(CENTER), para pegar o centro do texto
* Usamos o fill(color(255, 240, 60)) para adicionar uma cor ao texto. Você pode encontrar facilmente pesquisando "cor html"
* Agora criamos uma função para marcar os pontos, quando o personagem chega no topo da tela. function marcaPontos(){}
* Agora colocamos a condição if(yAtor < 15){meusPontos += 1}
* Agora adicionamos a função no arquivo sketch.js
* Só falta mandar o personagem, para isso podemos reutilizar a função colidiu e renomear ela para que seja uma função que retorne o ator para o começo. function voltaAtorPontoInicial(){yAtor = 368}

### Adicionando mais carros, com as mesmas imagens

* Para adicionar mais carros, usando as mesmas imagens, vamos duplicar a informação que está dentro da lista de imagensCarro[i]
* imagensCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
* Agora acresentamos as variavéis dentro das listas de coordenadas e velocidade xCarros[i], yCarros[i] e velocidadeCarros[i]
