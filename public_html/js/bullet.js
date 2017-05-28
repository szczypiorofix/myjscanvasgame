var Bullet = function(type, x, y, width, height) {
    
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 10;
    this.shot = false;
    
    this.sprite = new Sprite('images/bullet.png');
    
    
    this.update = function() {
        if (this.shot) {
            this.y -= this.speed;
            if (this.y < -10) {
                this.shot = false;
                this.y = 0;
                this.x = 0;
            }            
        }
    };
    
    this.draw = function(context) {
        if (this.shot) context.drawImage(this.sprite.image, this.x, this.y);
    };
};

