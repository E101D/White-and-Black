class Game {
    constructor(){
        this.level1 = createButton("1");
        this.level2 = createButton("2");
        this.level3 = createButton("3");
        this.level4 = createButton("4");
        this.level5 = createButton("5");
    }

    start(){
        form = new Form();
        form.display();
        
        this.handleLevelsButton();
        
         obstacleblack = new Group();
         obstaclewhite = new Group();
         obstacleBlackPositions = [
            { x: width / 2 - 150, y: height / 2 - 100},
            { x: width / 2 + 250, y: height / 3 - 100},
            { x: width / 2 - 180, y: height / 2 - 300},
           
            { x: width / 2 - 150, y: height / 2 + 200},
            { x: width / 2, y: height / 2 + 300},
          ];
          obstacleWhitePositions = [
           
            { x: width / 2 - 180, y: height / 2 - 300},
           
            { x: width / 2 + 150, y: height / 2 - 200},
            { x: width / 2, y: height / 2 + 300},
            { x: width / 2 - 150, y: height / 2 - 100},
            { x: width / 2 + 250, y: height / 3 - 100}
          ];
        this.handleLevel1();
    }
    
    play(){
        background("grey");
        drawSprites();
    }
    handlePlayButton(){
        form.playButton.mousePressed(() => {
            background("grey");
        })
    }

    handleLevelsButton(){
        form.levelsButton.mousePressed(() => {
            this.level5.position(width / 2 - 100, height / 3 - 100);
            this.level4.position(width / 2 - 150, height / 3- 100);
            this.level3.position(width / 2 - 200, height / 3- 100);
            this.level2.position(width / 2- 250, height / 3- 100);
            this.level1.position(width / 2 - 300, height / 3- 100);
            
            form.hide();
           
        })
    }
    
    hide(){
         this.level1.hide();
         this.level2.hide();
         this.level3.hide();
         this.level4.hide();
         this.level5.hide();

     }

     addSprites(spriteGroup, numberOfSprites, spriteColor, positions = []) {
        for (var i = 0; i < numberOfSprites; i++) {
          var x, y;
    
          if (positions.length > 0) {
            x = positions[i].x;
            y = positions[i].y;
          
          } else {
            x = random(width / 2 + 150, width / 2 - 150);
            y = random(-height * 4.5, height - 400);
          }
          var sprite = createSprite(x, y, 100, 20);
          sprite.shapeColor = spriteColor;
          spriteGroup.add(sprite);
        }
      }

     
    
    handleLevel1(){
        this.level1.mousePressed(()=>{
            this.hide();
            this.addSprites(obstacleblack, 2, "black", obstacleBlackPositions)
            this.addSprites(obstaclewhite, 2, "white", obstacleWhitePositions)

            gameState = "play";
        })
    }
    handleLevel2(){
        
    }
    handleLevel3(){

    }
    handleLevel4(){
        
    }
    handleLevel5(){
        
    }

    
    handlePlayerControls(){
        if(keyDown(UP_ARROW)){
            white.velocityY = -3;
        }
        

        white.velocityY = white.velocityY + 0.5
    }
    
}