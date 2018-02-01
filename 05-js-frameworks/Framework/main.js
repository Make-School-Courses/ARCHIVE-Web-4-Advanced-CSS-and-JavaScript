var box = document.getElementById("box")
var fw = FW(box, 200, 200, 25)
fw.color('green')

var box2 = document.getElementById("box2")
var fw2 = FW(box2, 400, 200, 40)
fw2.color('yellow').move(350, 70).rotate(0).update();

var t = 0

function onFrame(dt) {
  t += 0.1
  var x = fw.x < 400 ? fw.x + 1 : 0
  var y = 200 + Math.sin(t) * 100
  fw.move(x, y).rotate(t * 2).update()
  requestAnimationFrame(onFrame)
}

requestAnimationFrame(onFrame)

class Laser {
  constructor(color, damage) {
    this.color = color
    this.damage = damage
  }

  fire() {
    console.log(this.color, this.damage, "Zorch!")
  }
}

var a = new Laser("red", 12)
a.fire() // { color:"red", damage:12 }

function makeLaser()
return {
  color: "red",
  damage: 12,
  fire: function () {
    console.log(this.color, this.damage, "Zorch!")
  }
}

var b1 = makeLaser()
var b2 = makeLaser()


function Lazer(color, damage) {
  this.color = color
  this.damage = damage
}

Lazer.prototype.fire = function () {
  console.log(this.color, this.damage, "Zorch!")
}


var c = new Lazer("green", 11)
c.fire()

//setInterval(function() {}, 20)
