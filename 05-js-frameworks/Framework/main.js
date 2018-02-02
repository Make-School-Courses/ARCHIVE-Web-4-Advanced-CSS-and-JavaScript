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
