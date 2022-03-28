class Form {
    constructor(){
        this.playButton = createButton("PLAY");
        this.levelsButton = createButton("LEVELS");
        this.titleImg = createElement("h1");
    }

    setElementsPosition(){
        this.titleImg.position(400,25);
        this.playButton.position(width - 1250, height - 300);
        this.levelsButton.position(width - 500, height - 300);

        this.titleImg.html("Black and White");
        this.titleImg.class("titleImg");

        this.playButton.class("levelsButton");
        this.levelsButton.class("levelsButton");
    }

    hide(){
        this.playButton.hide();
        this.levelsButton.hide();
        this.titleImg.hide();
    }
    handleMousePressed(){
        this.levelsButton.mousePressed(()=>{
        this.levelsButton.hide();
        this.playButton.hide();
        this.titleImg.hide();
    })
}
    display(){
        this.setElementsPosition();
        this.handleMousePressed();
    }
}