var bg,bgImage
function preload(){
    bgImage=loadImage('house.png')
    boyImage=loadAnimation('b1.png','b2.png','b3.png','b4.png','b5.png','b6.png')
    boyl=loadAnimation('b1l.png','b2l.png','b3l.png','b4l.png','b5l.png','b6l.png')
    boyS=loadImage('b3.png')
    boyW=loadImage('b3l.png')
    tboximg=loadImage("tbox.png")
    p1img= loadImage('solve2.jpg')
    p2img= loadImage('solve3.jpg')
    qmimg=loadImage('qm.jpg')
}
function setup(){
    createCanvas(1200,600)
    //bg=createSprite(1200,1200)
    //bg.addImage(bgImage)
    boy=createSprite(600,160,10,10);
  
    boy.addImage('walking',boyS)
    boy.scale=0.5
    InvisibleGround1=createSprite(560,570,width,10)

    InvisibleGround2=createSprite(250,375,width/3,10)
    InvisibleGround3=createSprite(750,375,width/3,10)
    InvisibleGround4=createSprite(720,185,width/4,5)
    InvisibleGround1.visible=false
    InvisibleGround2.visible=false
    InvisibleGround3.visible=false
    InvisibleGround4.visible=false
    tbox=createSprite(665,150,50,20)
    tbox.addImage(tboximg)
    tbox.scale=0.2
    tbox1=createSprite(850,150,50,20)
    tbox1.addImage(tboximg)
    tbox1.scale=0.2
    tbox2=createSprite(800,340,50,20)
    tbox2.addImage(tboximg)
    tbox2.scale=0.2
    boy.depth=tbox.depth
    boy.depth=boy.depth+1
    tbox.debug=true;
    tbox.setCollider("rectangle",0,0,50,20)
    tbox1.setCollider("rectangle",0,0,50,20)
    tbox2.setCollider("rectangle",0,0,50,20)
    //tbox.setCollider("rectangle",0,0,50,20)
    boy.debug=true;
    p1=createSprite(250,200,150,150)
    p1.visible=false;
    pp= createInput('Enter Answer here')
    pp.visible=false
    submit=createButton('submit')
    submit.visible=false;
    good=createElement('h2')
    
    tbox3=createSprite(350,340,50,20)
    tbox3.addImage(tboximg)
    tbox3.scale=0.2

    tbox4=createSprite(100,340,50,20)
    tbox4.addImage(tboximg)
    tbox4.scale=0.2

    qm=createSprite(350,490,50,20)
    qm.addImage(qmimg)
    qm.scale=0.05

    
    qm1=createSprite(600,340,50,20)
    qm1.addImage(qmimg)
    qm1.scale=0.05

    
    qm2=createSprite(600,490,50,20)
    qm2.addImage(qmimg)
    qm2.scale=0.05

    qm2=createSprite(810,490,50,20)
    qm2.addImage(qmimg)
    qm2.scale=0.05

}
function draw(){
    
    background(bgImage)
    if(keyDown('LEFT_ARROW')){
        boy.x=boy.x-5;
        boy.addAnimation('walking',boyl)
    }
    if(keyDown('RIGHT_ARROW')){
        boy.x=boy.x+5;
        boy.addAnimation('walking',boyImage)
    }
    if(keyDown('DOWN_ARROW')){
        boy.y=boy.y+5;
        boy.addAnimation('walking',boyImage)
    } 
    if(keyDown('space')){
        boy.velocityY-=2;
        boy.addAnimation('walking',boyImage)
    }
    
    boy.velocityY+=0.8;
    boy.collide(InvisibleGround1)
    boy.collide(InvisibleGround2)
    boy.collide(InvisibleGround3)
    boy.collide(InvisibleGround4)
   

    if(boy.isTouching(tbox)){
        background('gold')
        fill('red')
        textSize(15)
        text("Unscramble the word below to get to the key",500,200)
        strokeWeight(55)
        textSize(25)
        text('C O C O H T E L A',500,300)
        pp.visible=true;
        boy.visible=false
        
      
       pp.position(500,400,100,100)
       submit.position(700,400,100,100)
        ans=pp.value()
        submit.mousePressed(()=>{
        if(ans=="chocolate"||ans=="CHOCOLATE"){
            pp.hide()
            strokeWeight(25)
            textSize(25)
            good.html('Good Job,press right arrow key to continue')
            good.position(300,300)
            submit.hide()
            good.show()
        }
    })
        
    }
boy.visible=true;

if(boy.isTouching(tbox1)){
background('gold')
fill('red')
textSize(15)
text("Find the missing letter (hint:the missing letters are vowels",500,200)
strokeWeight(55)
textSize(25)
text('T R  _ _ S _ R _',500,300)
pp.visible=true;
boy.visible=false
tbox.visible=false

pp.position(500,400,100,100)
submit.position(700,400,100,100)
ans=pp.value()
submit.mousePressed(()=>{
if(ans=="TREASURE"||ans=="treasure" ){
    pp.hide()
    
    strokeWeight(25)
    textSize(25)
    good.html('Good Job,press right arrow key to continue')
    good.position(300,300)
    submit.hide()
    good.show()
}
})  
    }

    if(boy.isTouching(tbox2)){
        p1.addImage(p1img)
        p1.visible=true
        text("Unscramble the word below to get to the key",700,200)
        
    }

    drawSprites();
}