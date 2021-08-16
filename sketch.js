var ship, boat
var sea, ocean
function preload(){
boat.loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
ocean.loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  background = "white"
  ship = createSprite(100,250)
  sea = createSprite(200,250)
  ship.setAnimation(boat)
  sea.setAnimation(ocean)
}

function draw() {
  background("blue");
 
}