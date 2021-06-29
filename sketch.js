const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;

var divisionHeight= 300;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world= engine.world;

  ground = new Ground(400,690,800,20)

  for(var i=0; i <=width; i=i+80){
    divisions.push(new Division(i, height-divisionHeight/2, 10,divisionHeight));
  }
 
  for(var j=75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j=50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j=75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j=50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

   
  Engine.run(engine)
}

function draw() {
  rectMode(CENTER);
  background("black");

  drawSprites();
  
  
  for(var n=0; n<divisions.length; n++){
    divisions[n].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }

  for(var j=0; j< plinkos.length; j++){
    plinkos[j].display();
  }

  for(var h=0; h<particles.length; h++){
    particles[h].display();
    }

    ground.display();
  
}