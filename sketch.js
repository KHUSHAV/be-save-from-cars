var person , personImage ;

var road , roadImage ;

var car , car_1 , car_2 , car_3 ;

var fruitCuttingSound;

var score ;



function preload(){
  
personImage = loadAnimation("Person_1.png","Person_2.png","Person_3.png","Person_4.png","Person_5.png","Person_6.png","Person_7.png","Person_8.png","Person_9.png","Person_10.png")

  roadImage = loadImage("road.jpg");
  
  car_1 = loadImage("car_1.png");
  car_2 = loadImage("car_2.png");
  car_3 = loadImage("car_3.png");
  
  fruitCutiingSound = loadSound("carAccident.mp3")
}

function setup() {
  createCanvas(300,600)
  
  road = createSprite(150,300,50,50);
  road.addImage(roadImage); 
  road.scale = 3.7 ;
  
  person = createSprite(192,550,50,50)
  person.addAnimation("person",personImage);
  person.scale = 0.6 ;
  
score = 0 ;
  carGroup = createGroup();
  
}

function draw() {
 background(180);
  
  
   
    stroke("red");
    textSize(20)
    textFont("Bahnschrift"); 
    text("Score : "+ score,390,50)
  
    if (car.isTouching(person)){
        carGroup.destroyEach();
        fruitCuttingSound.play();
        score = score+2
    }
  
  
  
  
  if(keyDown(UP_ARROW)){

  person.y = person.y - 5 ;
    
  }
  
  
  if(keyDown(DOWN_ARROW)){

  person.y = person.y + 5 ;
    
  }
  
  
  if(keyDown(LEFT_ARROW)){

  person.x = person.x - 5 ;
    
  }
  
  if(keyDown(RIGHT_ARROW)){

  person.x = person.x + 5 ;
    
  }
  
  SpawnCars();

  
  
  drawSprites();
}



function SpawnCars(){
  
  if(World.frameCount%80 === 0){
    car = createSprite(400,-60,20,20);
    car.scale = 0.2;
    car_1.scale = 11 ;
    r = Math.round(random(1,4));
    if (r == 1){
     
    car.addImage(car_1);
    }else if (r == 2) {
    car.addImage(car_2);
    }else  {
    car.addImage(car_3);
    
    }
   car.velocityY = 5 ;
    
    car.x = Math.round(random(30,270));
  }
  
  
  
  
  
  
  
  
  
}