var Player = function(type, x, y, width, height, bullet) {
    
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isShooting = false;
    this.bullet = bullet;
    this.sprite = new Sprite('images/spaceship.png');
    
    this.speedX = 5;
    this.speedY = 5;
    this.animStep = 0;
    this.animSpeed = 4;
    this.animFrame = 0;
    this.imageScale = 64;
    this.imageOrigin = 32;

    this.input = new Input();
    var audio = new Audio('music/shot.wav');
    
    this.update = function() {
        
        if (this.isShooting && !this.bullet.shot) {
            this.bullet.shot = true;
            this.bullet.x = this.x + ((this.width / 3)/ 2 -2);
            this.bullet.y = this.y + 5;
            this.isShooting = false;
            audio.play();
        }
        
        // ANIMATION UPDATE
        this.animStep++;
        if (this.animStep > this.animSpeed) {
            this.animStep = 0;
            this.animFrame++;
            if (this.animFrame > 2) this.animFrame = 0;
        }
                
        if (this.input.isDown(this.input.UP) && this.y > 200) {
            this.y -= this.speedY;
        }
        
        if (this.input.isDown(this.input.DOWN) && this.y < GameCanvas.screenHeight - this.imageScale) {
            this.y += this.speedY;
        }
        
        if (this.input.isDown(this.input.LEFT) && this.x > 0) {
            this.x -= this.speedX;
        }
        
        if (this.input.isDown(this.input.RIGHT) && this.x < (GameCanvas.screenWidth - this.imageScale)) {
            this.x += this.speedX;
        }
        
        if (this.input.isDown(this.input.CTRL) && !this.bullet.shot) {
            this.isShooting = true;
        }
    };
    
    this.draw = function(context) {
        
        context.drawImage(this.sprite.image, this.animFrame * this.imageOrigin, 0, this.imageOrigin, this.imageOrigin, this.x, this.y, this.imageScale, this.imageScale);
    };
};
