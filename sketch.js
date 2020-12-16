const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var ground1,ground2,bigGround;
var slingshot;
var polygon,polImg;
var score = 0;

function preload() {
    polImg = loadImage("polygon.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

   ground1 = new Ground(500,300,250,10);
   ground2 = new Ground(900,200,170,10);
   //bigGround = new Ground(600,380,1200,10);
  
  //level bottom for ground1
   box1 = new Box(500,260,30,40);
   box2 = new Box(470,260,30,40);
   box3 = new Box(440,260,30,40);
   box4 = new Box(410,260,30,40);
   box5 = new Box(530,260,30,40);
   box6 = new Box(560,260,30,40);
   box7 = new Box(590,260,30,40);

   //level 2 for ground1
   box8 = new Box(500,220,30,40);
   box9 = new Box(470,220,30,40);
   box10 = new Box(440,220,30,40);
   box11 = new Box(560,220,30,40);
   box12 = new Box(530,220,30,40);

   //level 3 for ground1
   box13 = new Box(500,180,30,40);
   box14 = new Box(470,180,30,40);
   box15 = new Box(530,180,30,40);

   //level 4 for ground1
   box16 = new Box(500,140,30,40);

   //level 1 for ground2
   box17 = new Box(900,170,30,40);
   box18 = new Box(930,170,30,40);
   box19 = new Box(960,170,30,40);
   box20 = new Box(870,170,30,40);
   box21 = new Box(840,170,30,40);

   //level 2 for ground2
   box22 = new Box(900,130,30,40);
   box23 = new Box(930,130,30,40);
   box24 = new Box(870,130,30,40);

   //level 3 for ground2
   box25 = new Box(900,90,30,40);

   polygon = Bodies.rectangle(100,100,45,45);
   World.add(world,polygon);

   slingshot = new SlingShot(polygon,{x:100, y:200});

   text("SCORE : "+score,750,40);

}

function draw(){
    //background(0);
    //updating our engine
    Engine.update(engine);
    
     ground1.display();
     ground2.display();
     //bigGround.display();
     image(polImg,polygon.position.x,polygon.position.y,40,40);
     slingshot.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     box17.display();
     box18.display();
     box19.display();
     box20.display();
     box21.display();
     box22.display();
     box23.display();
     box24.display();
     box25.display();
     box1.score();
     box2.score();
     box3.score();
     box4.score();
     box5.score();
     box6.score();
     box7.score();
     box8.score();
     box9.score();
     box10.score();
     box11.score();
     box12.score();
     box13.score();
     box14.score();
     box15.score();
     box16.score();
     box17.score();
     box18.score();
     box19.score();
     box20.score();
     box21.score();
     box22.score();
     box23.score();
     box24.score();
     box25.score();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode==32){
        Matter.Body.setPosition(polygon,{x: 50, y: 400});
        slingshot.attach(polygon);
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var options = await response.json();
    //console.log(options);
    var datetime = options.datetime;
   // console.log(datetime);
    var time = datetime.slice(11,13);
    //console.log(datetime.slice(0,4));
    if(time > 6 && time < 17){
        background = "yellow";
    
    }
     else{ 
        background = "grey";
     }
    
}
    
    

