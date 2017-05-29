    function e(element) {
        return document.getElementById(element);
    }
    

    
    var GameCanvas = {
        canvas : null,
        context : null,
        screenWidth : 0,
        screenHeight : 0,
        
        create : function(tag) {
            this.canvas = e(tag);
            this.context = this.canvas.getContext('2d');
            this.context.imageSmoothingEnabled = false;
            this.screenWidth = this.canvas.width;
            this.screenHeight = this.canvas.height;
        }
    };
    
    
    
    var gameManager = new GameManager();
        
    var background = new Sprite('images/background.png', GameCanvas.context);
    
    var audio = new Audio('music/OutThere.ogg');
    audio.loop = true;
    audio.play();
       
    
    function mainLoop() {
        update();
        draw(GameCanvas.context);
        requestAnimationFrame(mainLoop);
    }    
    
    function update() {
        
        gameManager.update();
        
    }
    

    function drawBackground(context) {
        context.drawImage(background.image, 0, 0, GameCanvas.screenWidth, GameCanvas.screenHeight);
    }
    
    function draw(context) {    
        // BACKGROUND
        drawBackground(context);

        
        gameManager.draw(context);
    }
    
    window.onload = function() {
//
//        var stage = new PIXI.Container(),
//            renderer = PIXI.autoDetectRenderer(256, 256);
//        document.body.appendChild(renderer.view);
//
//        //Use Pixi's built-in `loader` object to load an image
//        PIXI.loader
//          .add("images/spaceship.png")
//          .load(setup);
//
//        //This `setup` function will run when the image has loaded
//        function setup() {
//
//          //Create the `cat` sprite from the texture
//          var cat = new PIXI.Sprite(
//            PIXI.loader.resources["images/spaceship.png"].texture
//          );
//
//          stage.addChild(cat);
//
//          renderer.render(stage);
//        }

            GameCanvas.create('gameCanvas');
            
            gameManager.loadLevel(1);
            
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            requestAnimationFrame(mainLoop);
    };
