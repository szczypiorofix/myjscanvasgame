var GameManager = function() {
    
    this.level01 = [0,0,0,0,0,0,0,0,0,0,0];
    this.player = null;
    this.alien = null;
    this.bullet = null;
  
    this.update = function() {
        this.player.update();
        this.alien.update();
        this.bullet.update();
    };
    
    this.draw = function(context) {
        this.player.draw(context);
        this.alien.draw(context);
        this.bullet.draw(context);
    };
    
    this.loadLevel = function(level) {
        
        this.bullet = new Bullet(0, 200, 200, 16, 16);
        
        this.player = new Player(0, GameCanvas.screenWidth / 2 - 35, GameCanvas.screenHeight - 100, 192, 64, this.bullet);
        
        this.alien = new Alien(0, 50, 50, 192, 64);
        
    };
};