var soloSprite, soloImagem;
//é aqui que cria a variável
var trexSprite, trexAnimacao;

//nessa função, carrega-se arquivos de mídia
function preload() {
    //é aqui que carrega a animação
    trexAnimacao = loadAnimation("trex1.png","trex2.png","trex3.png");

}


function setup() {
    createCanvas(600, 200);
    //é aqui que cria as sprites
    trexSprite = createSprite(50,170,50,50);
    trexSprite.addAnimation("correndo",trexAnimacao);
    trexSprite.scale=0.5;
    
    

}


function draw() {
    //pinta o fundo de uma cor
    background("cyan");
    //verifica se a pessoa apertou a tecla espaço
    if(keyDown("space")){
        //dá velocidade para o trex voar
        trexSprite.velocityY = -10;
    }
    //esse código dá gravidade para o trex cair
    trexSprite.velocityY += 0.8;
    
    
    
    drawSprites();
}
