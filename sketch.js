const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

}

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  for(var j= 40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j= 15;j<=width-10;j=j+50){
    plinkos.push(new plinkos(j,175));
  }

  for(var j=0; j<particles.length; j++){
    particles[j].display
  }

  for(var k=0; k<divisions.length; k++){
    particles[k].display
  }

  if(frameCount%60===0){
    particles.push(new Particle)
  }
  
  drawSprites();
}