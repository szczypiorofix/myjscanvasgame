var Alien = function(type, x, y, width, height) {
    
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    
    this.sprite = new Sprite('images/alien.png');
    
    this.speedX = 5;
    this.speedY = 5;
    this.animStep = 0;
    this.animSpeed = 10;
    this.animFrame = 0;
    this.imageScale = 64;
    this.imageOrigin = 32;
    
    
    this.update = function() {
        
        // ANIMATION UPDATE
        this.animStep++;
        if (this.animStep > this.animSpeed) {
            this.animStep = 0;
            this.animFrame++;
            if (this.animFrame > 2) this.animFrame = 0;
        }

    };
    
    this.draw = function(context) {
        
        context.drawImage(this.sprite.image, this.animFrame * this.imageOrigin, 0, this.imageOrigin, this.imageOrigin, this.x, this.y, this.imageScale, this.imageScale);
    };
};

