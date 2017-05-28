function Animation(images, speed) {
    
    this.step = 0;
    this.images = images;
    this.speed = speed;
    this.currentFrameStep = 0;
    this.currentFrame = new Image();
    this.frames = [];


    for (i = 0; i < this.images.length; i++) {
        this.frames[i] = new Image();
        this.frames[i] = this.images[i];
    }
    
    this.nextStep = function() {
        
        this.step ++;
        if (this.step > this.speed) {
            this.currentFrameStep++;
            if (this.currentFrameStep > this.images.length-1) this.currentFrameStep = 0;
            this.step = 0;
        }
        
        this.currentFrame = this.frames[this.currentFrameStep];
    };
    
    this.drawAnimation = function(canvasContext, x, y) {
        canvasContext.drawImage(this.currentFrame, x, y, 64, 97);
    };
}