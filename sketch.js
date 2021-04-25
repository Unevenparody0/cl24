const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,angryman,box3,box4,box5;
var pigy1,pigy2;
var lo,lo1,lo2,lo3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3= new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20);
    angryman = new Boxer(100,100);
    pigy1 = new pigstep(810,350);
    pigy2 = new pigstep(810,220);
    lo = new lodop(810,260,300,PI/2);
    lo1 = new lodop(810,180,300,PI/2);
    lo2 = new lodop(760,120,150,PI/2);
    lo3 = new lodop(870,120,300/2,-PI/2);
}

function draw(){
    background(120);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    angryman.display();
    pigy1.display();
    pigy2.display();
lo.display();
lo1.display();
lo2.display();
lo3.display();
}