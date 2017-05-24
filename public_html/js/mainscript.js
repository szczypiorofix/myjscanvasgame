    function e(element) {
        return document.getElementById(element);
    }

    var FPS = 60;
    var canvas;
    var canvasContext;
    var ballX = 50;
    var ballY = 50;
    var ballSize = 40;
    var speedX = 0;
    var speedY = 0;
    var maxSpeed = 5;
    
    var backgroundImage = e('background');
    
    var playerImages = [e('idle00R'),
            e('idle01R'),
            e('idle02R'),
            e('idle03R'),
            e('idle04R'),
            e('idle05R'),
            e('idle06R'),
            e('idle07R'),
            e('idle08R'),
            e('idle09R')];
        
    var playerAnim = new Animation(playerImages, 4);
    playerAnim.setFrames();
    
    var audio = new Audio('music/mirage.mp3');
    audio.loop = true;
    audio.play();
    
    var Key = {
        _pressed: {},
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,

        isDown: function(keyCode) {
          return this._pressed[keyCode];
        },
        
        isUp: function(keyCode) {
          return this._pressed[keyCode];
        },

        onKeydown: function(event) {
          this._pressed[event.keyCode] = true;
        },

        onKeyup: function(event) {
          delete this._pressed[event.keyCode];
        }
    };
    
    window.addEventListener('keyup', function(event) 
    {
        Key.onKeyup(event);
    }, false);
    
    window.addEventListener('keydown', function(event)
    {
        Key.onKeydown(event);
    }, false);
        
    
    function mainLoop() {
        update();
        draw();
        requestAnimationFrame(mainLoop);
    }
    
    
    window.onload = function() {
        canvas = e('gameCanvas');
        canvasContext = canvas.getContext('2d');
        
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        requestAnimationFrame(mainLoop);
        
        //setInterval(function() { mainLoop(); }, 1000 / FPS);
    };
    
    
    function update() {
        
        playerAnim.nextStep();
        
        speedX = 0;
        speedY = 0;
        
        if (Key.isDown(Key.UP)) {
            moveUp = true;
            speedY = -3;
        }

        if (Key.isDown(Key.LEFT)) {
            speedX = -3;
            moveLeft = true;
        }

        if (Key.isDown(Key.DOWN)) {
            speedY = 3;
            moveDown = true;
        }

        if (Key.isDown(Key.RIGHT)) {
            speedX = 3;
            moveRight = true;
        }

        ballX += speedX;
        ballY += speedY;
    }
    
    function drawRect(x, y, width, height, color) {
        canvasContext.fillStyle = color;
        canvasContext.fillRect(x, y, width, height);
    }

    function drawBackground() {
        canvasContext.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    }
    
    function draw() {    
        // BACKGROUND
        //drawRect(0, 0, canvas.width, canvas.height, '#111');
        drawBackground();
        
        // PLAYER
        //drawRect(ballX, ballY, ballSize, ballSize, 'blue');
        //drawPlayer(ballX, ballY);
        playerAnim.drawAnimation(canvasContext, ballX, ballY);
    }