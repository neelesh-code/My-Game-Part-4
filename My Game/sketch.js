var play, playImage;
var jb, jbImage;
var smiley, smileyImage;

var boy1, boy2, boy3, boy4, boy5;
var boy1Image, boy2Image, boy3Image, boy4Image, boy5Image;
var flag=4;
var level2, level2Image;

var card1, card2, card3;
var plant1, plant2, plant3, plant10, plant20, plant30;

var card1Image, card2Image, card3Image;
var plant1Image, plant2Image, plant3Image;
var plant100;

var puzzle2Input, puzzle2Try;

var puzzle2Submit;

var dot=0;

var jet=4;

var level3;

var robot, robotImage;
var spaceship, spaceshipImage;

var level4;



var START=0;
var PLAYONE=1;
var PLAYTWO=2;
var PLAYTHREE=3;
var PLAYFOUR=4;


var gameState=0;

function preload(){
  playImage=loadImage("Images/Logistics/Play0.png");
  jbImage=loadImage("Images/Logistics/boyin jail1.gif");
  smileyImage=loadImage("Images/Logistics/Smiley.png");
  boy1Image=loadImage("Images/Puzzle1/Boy10.png");
  boy2Image=loadImage("Images/Puzzle1/Boy20.png");
  boy3Image=loadImage("Images/Puzzle1/Boy30.png");
  boy4Image=loadImage("Images/Puzzle1/Boy40.png");
  boy5Image=loadImage("Images/Puzzle1/Boy50.png");
  level2Image=loadImage("Images/Logistics/Next.png");
  card1Image=loadImage("Images/Puzzle2/Card10.png");
  card2Image=loadImage("Images/Puzzle2/Card20.png");
  card3Image=loadImage("Images/Puzzle2/Card30.png");
  plant1Image=loadImage("Images/Puzzle2/Plant10.png");
  plant2Image=loadImage("Images/Puzzle2/Plant20.png");
  plant3Image=loadImage("Images/Puzzle2/Plant30.png");
  robotImage=loadImage("Images/Puzzle3/Robot0.png");
  spaceshipImage=loadImage("Images/Puzzle3/Spaceship0.png");


}

function setup() {
  createCanvas(1200,600);
  
  play=createSprite(475, 75, 50, 50);
  play.addImage(playImage);
  play.scale=0.2;

  jb=createSprite(800,300,50,50)
  jb.addImage(jbImage);
  jb.scale=0.9;

  boy1=createSprite(100,400,50,50);
  boy2=createSprite(340,400,50,50);
  boy3=createSprite(580,400,50,50);
  boy4=createSprite(820,400,50,50);
  boy5=createSprite(1060,400,50,50);

  boy1.addImage(boy1Image)
  boy2.addImage(boy2Image)
  boy3.addImage(boy3Image)
  boy4.addImage(boy4Image)
  boy5.addImage(boy5Image)

  boy1.visible=false;
  boy2.visible=false;
  boy3.visible=false;
  boy4.visible=false;
  boy5.visible=false;

  boy1.scale=0.9;
  boy2.scale=0.9;
  boy3.scale=0.9;
  boy4.scale=0.9;
  boy5.scale=0.9;

  level2=createSprite(1000,150,50,50);
  level2.addImage(level2Image);
  level2.scale=0.35;
  level2.visible=false;

  plant1=createSprite(150,100,50,50);
  plant1.addImage(plant1Image);
  plant1.scale=0.6;

  plant2=createSprite(350,100,50,50);
  plant2.addImage(plant2Image);
  plant2.scale=0.6;

  plant20=createSprite(150,300,50,50);
  plant20.addImage(plant2Image);
  plant20.scale=0.6;

  plant3=createSprite(350,300,50,50);
  plant3.addImage(plant3Image);
  plant3.scale=0.6;

  plant30=createSprite(150,500,50,50);
  plant30.addImage(plant3Image);
  plant30.scale=0.6;

  plant10=createSprite(350,500,50,50);
  plant10.addImage(plant1Image);
  plant10.scale=0.6;

  plant100=createSprite(900,200,50,50);
  plant100.addImage(plant1Image);
  plant100.scale=0.5;

  
  card1=createSprite(550,100, 50,50);
  card1.addImage(card1Image);
  card1.scale=0.6;

  card2=createSprite(550,300, 50,50);
  card2.addImage(card2Image);
  card2.scale=0.6;

  card3=createSprite(550,500, 50,50);
  card3.addImage(card3Image);
  card3.scale=0.6;

  plant1.visible=false;
  plant2.visible=false;
  plant3.visible=false;
  plant30.visible=false;
  plant10.visible=false;
  plant20.visible=false;
  plant100.visible=false;
  card1.visible=false;
  card2.visible=false;
  card3.visible=false;

  puzzle2Input=createInput("Answer");
  puzzle2Input.hide();

  puzzle2Submit=createButton("Submit")
  puzzle2Submit.hide();

  level3=createSprite(1000,550,50,50);
  level3.addImage(level2Image);
  level3.scale=0.35;
  level3.visible=false;

  robot=createSprite(900,350, 50,50);
  robot.addImage(robotImage);
  robot.visible=false;
  
  spaceship=createSprite(300,350, 50,50);
  spaceship.addImage(spaceshipImage);
  spaceship.scale=1.5;
  spaceship.visible=false;

  level4=createSprite(600,550,50,50);
  level4.addImage(level2Image);
  level4.scale=0.35;
  level4.visible=false;


}

function draw() {
  background(0,0,0);
  
  if(gameState===START){
    textSize(60);
    stroke ("white");
    fill ("white")
    text ("Brain Game",100,100);
    
    if(mousePressedOver(play)){
      gameState=1;
    }
  }
  
  if(gameState===1){
    jb.destroy();
    play.destroy();
    fill("white")
    textSize(20);
    text("There are 5 children who have a candy. All of them like the candy equally as much. After some time, one child somehow ", 50, 50);
    text("took everyone's candy. When the children were asked to show their hands, one child had all the candies. ", 125, 75);
    text("However, the child with all the candy was not the child who took all of the others' candies. Which child had all the candies? ", 42.5, 100);
    boy1.visible=true
    boy2.visible=true
    boy3.visible=true
    boy4.visible=true
    boy5.visible=true

    if(mousePressedOver(boy1) || mousePressedOver(boy3) || mousePressedOver(boy4) || mousePressedOver(boy5)){
     flag=3;
    }

    if(flag===3){
      text("Wrong",600,200);
    }

    if(mousePressedOver(boy2)){
      flag=5;
    }

    if(flag===5){
      text("Correct",600,200);
      level2.visible=true;
    }

    if(mousePressedOver(level2)){
      gameState=2;
    }
    

  }
  
  if(gameState===2){
    boy1.destroy();
    boy2.destroy();
    boy3.destroy();
    boy4.destroy();
    boy5.destroy();
    level2.destroy();

    plant1.visible=true;
    plant2.visible=true;
    plant3.visible=true;
    plant30.visible=true;
    plant10.visible=true;
    plant20.visible=true;
    plant100.visible=true;
    card1.visible=true;
    card2.visible=true;
    card3.visible=true;
    fill("white");
    textSize(40);
    text("What is", 700,200);
    text("?", 970,200);

    puzzle2Input.position(835,400);
    puzzle2Input.show();

    puzzle2Try=puzzle2Input.value();

    console.log(puzzle2Try);

    puzzle2Submit.position(835, 450);
    puzzle2Submit.size(100,20)
    //puzzle2Submit.show();

    puzzle2Submit.mousePressed(answer());

    if(mousePressedOver(level3)){
      dot=4;
    }

    if(dot===4){
      gameState=3;
    }

  }

  if(gameState===3){
    plant1.destroy();
    plant10.destroy();
    plant100.destroy();
    plant2.destroy();
    plant20.destroy();
    plant3.destroy();
    plant30.destroy();
    card1.destroy();
    card2.destroy();
    card3.destroy();
    puzzle2Input.hide();
    level3.destroy();


    robot.visible=true;
    spaceship.visible=true;

    fill("white");
    textSize(20);
    text("A robot is fighting a spaceship. The robot has 5 missiles and the spaceship has 4 missiles.  On each turn, the robot and spaceship \n can either shoot 1 missile or stay put.  If the robot stays put and spaceship shoots, then the robot loses a life.  If the spaceship stays\n put and the robot shoots, the spaceship loses a life. One of the robot's missiles has the power of two missiles. The spaceship can\n fight with 1 missile and only have the damage of 1 missile. The spaceship has 2 lives and the robot has 1 life. Who will win the game?", 12.5,25);
 
    if(mousePressedOver(spaceship)){
      jet=3;
    }

    if(mousePressedOver(robot)){
      jet=5;
    }

    if(jet===3){
      text("Wrong",600,200);
    }

    if(jet===5){
      text("Correct",600,200);
      level4.visible=true;
    }

    if(mousePressedOver(level4)){
      gameState=4;
    }

  }

  if(gameState===4){
    spaceship.destroy();
    robot.destroy();
  }
  
  
  drawSprites();
}


function answer(){
  if(puzzle2Try==="1"){
    dot=1;
  }
  else{
    dot=2;
  }

  if(puzzle2Try==="Answer"){
    dot=3;
  }
  
  if(puzzle2Try===""){
    dot=3;
  }

  if(dot===1){
    textSize(30);
    fill("white");
    text("Correct", 835, 500);
    level3.visible=true;
  }

  if(dot===2){
    textSize(30);
    fill("white");
    text("Try Again", 835, 500);
  }
}