var Input = function() {

    this._pressed = [];
    this.LEFT = 37;
    this.UP = 38;
    this.RIGHT = 39;
    this.DOWN = 40;
    this.CTRL = 17;

    var self = this;

    window.addEventListener('keyup', function(event) 
    {
        self.onKeyup(event);
    }, false);

    window.addEventListener('keydown', function(event)
    {
        self.onKeydown(event);
        //console.log(event.keyCode); - check key
    }, false);

    this.isDown = function(keyCode) {
      return this._pressed[keyCode];
    };

    this.onKeydown = function(event) {
      this._pressed[event.keyCode] = true;
    };

    this.onKeyup = function(event) {
      delete this._pressed[event.keyCode];
    };        
};
