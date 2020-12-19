const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball,ball2,ball3,ball4,ball5,ball6;
var rope,rope2,rope3,rope4,rope5,rope6;


function setup(){
    createCanvas(700, 500);

    engine = Engine.create();
    world = engine.world;

//Bodies:

    ball = new Ball(200,200,30);
    ball2 = new Ball(260,200,30);
    ball3 = new Ball(320,200,30);
    ball4 = new Ball(380,200,30);
    ball5 = new Ball(440,200,30);
    ball6 = new Ball(500,200,30);



    rope = new Rope(ball.body, {x : 200, y : 100});
    rope2 = new Rope(ball2.body, {x : 260, y : 100});
    rope3 = new Rope(ball3.body, {x : 320, y : 100});
    rope4 = new Rope(ball4.body, {x : 380, y : 100});
    rope5 = new Rope(ball5.body, {x : 440, y : 100});
    rope6 = new Rope(ball6.body, {x : 500, y : 100});

}

function draw(){
    background(0);
    Engine.update(engine);


//display:
    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();



    rope.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    rope6.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball6.body, {x:mouseX, y:mouseY});
  }