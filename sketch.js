
var car,wall;
var weight;
var deformation;

function setup() {
  createCanvas(1200,400);

  wall = createSprite(width - 50, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
  wall.debug = true;

  car = createSprite(50, 200, 20, 20);
  car.velocityX = Math.round(random(55,90));
  car.debug = true;
  console.log(car.velocityX);
  weight = Math.round(random(400,1500));
  
  deformation = Math.round((0.5 * weight * car.velocityX * car.velocityX)/22500);
  

}

function draw() {
  background("red");  

  if(wall.x - car.x < (wall.width+car.width)/2){ 
     car.velocityX = 0;
     
     if (deformation < 100){
         car.shapeColor = color(0,255,0);
     }
     else if (deformation > 100 && deformation < 180){
         car.shapeColor = color(230,230,0);
     }
     else if (deformation > 180) {
         car.shapeColor = color(255,0,0);          
     }

     stroke("black");
     fill("blue");
     textSize(25);
     text("Damage = "+deformation,width/2 - 50,50);
  }
  
  

  drawSprites();
}