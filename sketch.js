const Engine = Matter.Engine;
const World= Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine,world
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gameState="Start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  fill("white")
  //text(mouseX+","+mouseY,mouseX,mouseY)
  textSize(20)
  text("Score : "+score,20,30);
  text("500",740,520);
  text("500",660,520);
  text("200",580,520);
  text("100",500,520);
  text("100",420,520);
  text("100",340,520);
  text("100",260,520);
  text("200",180,520);
  text("500",100,520);
  text("500",20,520);
  Engine.update(engine);
  ground.display();
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(particle!=null){
     particle.display();
     if(particle.body.position.y>700){
       if(particle.body.position.x<163){
         score+=500
         particle=null;
         if(turn>=5){
           gameState="End"
         }
       }
      
         else if(particle.body.position.x<243&& particle.body.position.x>163){
            score+=200
            particle=null;
            if(turn>=5){
              gameState="End"
            }
          }
         
              else if(particle.body.position.x<562&& particle.body.position.x>243){
                score+=100
                particle=null;
                if(turn>=5){
                  gameState="End"
                }
              }
              
                  else if(particle.body.position.x<642&& particle.body.position.x>562){
                    score+=200
                    particle=null;
                    if(turn>=5){
                      gameState="End"
                    }
                  }
                 
                     else if(particle.body.position.x<780&& particle.body.position.x>642){
                        score+=100
                        particle=null;
                        if(turn>=5){
                          gameState="End"
                        }
                      }
                    }
                }
            
       
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     
   }

   if(gameState==="End"){
     textSize(100)
     fill("white")
     text("Game Over",150,250)
   }
}
function mousePressed(){
  if(gameState==="Start"){
    turn++
    particle=new Particle(mouseX,30,10)
  }
}
