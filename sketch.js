var sezione2;
var trigger;
var trigger2;
var trigger3;
var trigger4;
var starttext;
var value = 0;

var r1 = 0;
var g1 = 255;
var b1 = 0;

var r2 = 255;
var g2 = 255;
var b2 = 255;

var giroX = 0.6;
var giroY = 0.6;
var giroZ = 0.6;


var backcolor = 0;

function preload(){
  sezione2 = loadModel("assets/pistolafbx.obj", true);
  trigger = loadImage("assets/image.png");
  trigger2 = loadImage("assets/image2.png");
  trigger3 = loadImage("assets/image3.png");
  trigger4 = loadImage("assets/image4.png");
  trigger5 = loadImage("assets/image5.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
    clear();
    background(0);

    push();
    if(value == 0){
    triggerb = image(trigger5,0-trigger5.width/2,0-trigger5.height/2);
    }
    if(value == 1){
    image(trigger2,-3000+(frameCount*0.5),-350, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),-300, trigger.width/2, trigger.height/2);
    image(trigger2,-3000+(frameCount*0.5),-250, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),-200, trigger.width/2, trigger.height/2);
    image(trigger2,-3000+(frameCount*0.5),-150, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),-100, trigger.width/2, trigger.height/2);
    image(trigger2,-3000+(frameCount*0.5),-50, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),0, trigger.width/2, trigger.height/2);
    image(trigger2,-3000+(frameCount*0.5),50, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),100, trigger.width/2, trigger.height/2);
    image(trigger2,-3000+(frameCount*0.5),150, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),200, trigger.width/2, trigger.height/2);
    image(trigger2,-3000+(frameCount*0.5),250, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),300, trigger.width/2, trigger.height/2);
    image(trigger2,-3000+(frameCount*0.5),350, trigger.width/2, trigger.height/2);
    pop();
  }
    else if(value ==2){
    image(trigger3,-3000+(frameCount*0.5),-350, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),-300, trigger.width/2, trigger.height/2);
    image(trigger3,-3000+(frameCount*0.5),-250, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),-200, trigger.width/2, trigger.height/2);
    image(trigger3,-3000+(frameCount*0.5),-150, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),-100, trigger.width/2, trigger.height/2);
    image(trigger3,-3000+(frameCount*0.5),-50, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),0, trigger.width/2, trigger.height/2);
    image(trigger3,-3000+(frameCount*0.5),50, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),100, trigger.width/2, trigger.height/2);
    image(trigger3,-3000+(frameCount*0.5),150, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),200, trigger.width/2, trigger.height/2);
    image(trigger3,-3000+(frameCount*0.5),250, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),300, trigger.width/2, trigger.height/2);
    image(trigger3,-3000+(frameCount*0.5),350, trigger.width/2, trigger.height/2);
    pop();
  }
    else if(value ==3){
    image(trigger4,-3000+(frameCount*0.5),-350, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),-300, trigger.width/2, trigger.height/2);
    image(trigger4,-3000+(frameCount*0.5),-250, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),-200, trigger.width/2, trigger.height/2);
    image(trigger4,-3000+(frameCount*0.5),-150, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),-100, trigger.width/2, trigger.height/2);
    image(trigger4,-3000+(frameCount*0.5),-50, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),0, trigger.width/2, trigger.height/2);
    image(trigger4,-3000+(frameCount*0.5),50, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),100, trigger.width/2, trigger.height/2);
    image(trigger4,-3000+(frameCount*0.5),150, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),200, trigger.width/2, trigger.height/2);
    image(trigger4,-3000+(frameCount*0.5),250, trigger.width/2, trigger.height/2);
    image(trigger,-2000-(frameCount*0.5),300, trigger.width/2, trigger.height/2);
    image(trigger4,-3000+(frameCount*0.5),350, trigger.width/2, trigger.height/2);
    pop();
  }



    var locX = mouseX - width / 2;
    var locY = mouseY - height / 2;

    ambientLight(5, 5, 5);

    var luce1 = pointLight(r1, g1, b1, locX, locY, 330);
    var luce2 = pointLight(r2, g2, b2, -locX, -locY, 400);

    push();
    noStroke(255);
    //scale(1.5);
    translate(0,0,150)
    rotateX(frameCount * giroX);
    rotateY(frameCount * giroY);
    rotateZ(frameCount * giroZ);
    model(sezione2);
    pop();
}

function mouseClicked(){
  if(value == 0){
    value = 1;
  }
  else if(value == 1){
    camera(250, 250, 100, 0, 0, 0, 0, 1, 0);
    r1 = 255;
    g1 = 255;
    b1 = 255;

    r2 = 255;
    g2 = 83;
    b2 = 16;

    giroX = 0.4;
    giroY = 0.4;
    giroZ = 0.4;

    value = 2;
  }
  else if(value == 2){
    camera(125, 0, 350, -40, 0, 60, 50, 1, 0);
    r1 = 255;
    g1 = 0;
    b1 = 102;

    r2 = 255;
    g2 = 255;
    b2 = 255;

    giroX = 0.2;
    giroY = 0.2;
    giroZ = 0.2;

    value = 3;
  }
}
