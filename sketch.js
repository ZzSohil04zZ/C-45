var bg;
var spacecraft,spaceCI,meteorI
var meteorG,enemyG;

function preload() {

  bg = loadImage("images/Bg2.jpg")
  spaceCI = loadImage("images/spacecraft.png")
  meteorI = loadImage("images/MeteorI.png")
  enemyI = loadImage("images/Espacecraft.png")
}

function setup() {
  createCanvas(1000,500);

  spacecraft = createSprite(500,450)
  spacecraft.addImage(spaceCI)
  spacecraft.scale = 0.2

  meteorG = new Group()
  enemyG = new Group()
}

function draw() {
  background(bg);
 

  if(keyDown("A")){
    spacecraft.x = spacecraft.x - 6
  }

  if(keyDown("D")){
    spacecraft.x = spacecraft.x + 6
  }
spawnMeteor()
spawnEnemy()
  drawSprites()
}

function spawnMeteor(){
  if(World.frameCount % 30 === 0 ){
  meteor = createSprite(random(50,950),100) 
  meteor.velocityY = 8
  meteor.addImage(meteorI)
  meteor.scale = 0.2
  meteor.lifetime = 500/8
  meteorG.add(meteor)
  }

}

function spawnEnemy(){
  if(World.frameCount % 109 === 0 ){
  enemy = createSprite(random(50,950),100) 
  enemy.velocityY = 8
  enemy.addImage(enemyI)
  enemy.scale = 0.2
  enemy.lifetime = 500/8
  enemyG.add(enemy)
  }

}


