var car, wall;
var speed, weight;


function setup() {
  createCanvas(800,400);
  wall = createSprites(150,200,60, height/2);
  car = createSprites(50,200,50,50);

  speed = random(55,90);
  weight = random(400,150);

  car.velocityX = speed;

}

function draw() {
  background(255,255,255);  
  
  if(wall.x - car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/250;
    if(deformation>180){
      car.shapeColur(250,0,0)
    }
    

  }
  
  drawSprites();

}