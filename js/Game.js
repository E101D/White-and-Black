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

        console.log(gameState);
        
        this.handleLevelsButton();
        
         obstacleblack = new Group();
         obstaclewhite = new Group();
         obstacleBlackPositions = [
            { x: width / 2 - 150, y: height / 2 - 100},
            { x: width / 2 + 250, y: height / 3 - 100},
            { x: width / 2 + 250, y: height / 2 - 300},
           
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
        this.handleLevel2();
        this.handleLevel3();
        this.handleLevel4();
        this.handleLevel5();
        }
    
    play(){
        background("grey");
        drawSprites();

        this.handlePlayerControls();
        
        if(white.isTouching(platform)){
            white.velocityY = 0;
        }
        if(black.isTouching(platform2)){
            black.velocityY = 0;
        }

        if(white.isTouching(obstaclewhite)&& white.position.y > obstaclewhite.y){
            white.velocityY = 0;
        }
        if(black.isTouching(obstacleblack)&& black.position.y > obstacleblack.y){
            black.velocityY = 0;
        }
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
        this.level2.mousePressed(()=>{
            this.hide();
            this.addSprites(obstacleblack, 3, "black", obstacleBlackPositions)
            this.addSprites(obstaclewhite, 2, "white", obstacleWhitePositions)

            gameState = "play";
        })
    }
    handleLevel3(){
        this.level3.mousePressed(()=>{
            this.hide();
            this.addSprites(obstacleblack, 2, "black", obstacleBlackPositions)
            this.addSprites(obstaclewhite, 4, "white", obstacleWhitePositions)

            gameState = "play";
        })
    }
    handleLevel4(){
        this.level4.mousePressed(()=>{
            this.hide();
            this.addSprites(obstacleblack, 5, "black", obstacleBlackPositions)
            this.addSprites(obstaclewhite, 3, "white", obstacleWhitePositions)

            gameState = "play";
        })
    }
    handleLevel5(){
        this.level5.mousePressed(()=>{
            this.hide();
            this.addSprites(obstacleblack, 3, "black", obstacleBlackPositions)
            this.addSprites(obstaclewhite, 6, "white", obstacleWhitePositions)

            gameState = "play";
        })
    }

    
    handlePlayerControls(){
        if(keyDown(UP_ARROW)){
            white.velocityY = -3;
        }
        if(keyDown(LEFT_ARROW)){
            white.position.x -= 3;
        }
        if(keyDown(RIGHT_ARROW)){
            white.position.x += 3;
        }

        if(keyDown("w")){
            black.velocityY = -3;
        }
        if(keyDown("a")){
            black.position.x -= 3;
        }
        if(keyDown("d")){
            black.position.x += 3;
        }

        white.velocityY = white.velocityY + 0.5;
        black.velocityY = black.velocityY + 0.5; 
    }
    
}