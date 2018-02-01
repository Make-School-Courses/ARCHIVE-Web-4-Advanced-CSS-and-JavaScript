// Define a self executing function to 
// hold the framework. This takes in 
// Window and jQuery. 

(function(global, $) {
  // 
  var Sprite = function(el, x, y, z) {
    return new Sprite.init(el, x, y, z)
  }
  
  // Define methods on a prototype obj
  Sprite.prototype = {
    // move
    move: function(x, y, z) {
      this.x = x
      this.y = y
      this.z = z
      return this
    },
    
    update: function() {
      this.el.transform = self.el.style.transform = `translate3d(${self.x}px, ${self.y}px, ${self.z}px)`;
    }
  }
  
  // Define an initializer
  Sprite.init = function(el, x, y, z) {
    var self = this
    self.el = el
    self.x = x || 0
    self.y = y || 0
    self.z = z || 0
    
    self.el.style.transform = `translate3d(${self.x}px, ${self.y}px, ${self.z}px)`;
  }
  
  // 
  Sprite.init.prototype = Sprite.prototype
  
  // 
  global.Sprite = global.$prite = Sprite
  
}(window, jQuery))