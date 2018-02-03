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



//var sprites = []
//for (var i = 0; i < 100; i++) {
//  var x = Math.random() * 500
//  var y = Math.random() * 500
//  var z = Math.random() * -500
//  var el = document.createElement("div")
//  el.style.width = '100px'
//  el.style.height = '100px'
//  el.style.backgroundColor = 'red'
//  el.style.border = 'solid 1px #000'
//  document.body.appendChild(el)
//  sprites.push(Sprite(el, x, y, z))
//}
//
//document.body.style.perspective = '500px'


// Store some boxes
const boxes = []

// make 100 boxes with some random properties.

for (var i = 0; i < 100; i++) {
  var el = document.createElement("div")  // Create a div
  el.style.width = '20px'                 
  el.style.height = '20px'
  el.style.backgroundColor = 'red'
  el.style.border = 'solid 1px #000'
  el.style.display = 'inline-block'
  el.style.transition = '1000ms'          // Assign a transition
  el.style.opacity = 0                    // opacity 0
  
  const start = Math.random() * 1000 // Generate some random starting 
  const end = start + 200            // and ending values 
  
  document.body.appendChild(el) // Add this element to the DOM
  
  // Make some Range Animator instances
  boxes.push(RA(el, start, end, function() {
    // Enter callback - could do anything here. 
    this.el.style.opacity = 1 
  }, function() {
    // Leave callback - could do anything here. 
    this.el.style.opacity = 0
  }))
}


// ***************************************************
// Uncomment the block below to animate over time
// generate a value to activate some animations
// We will count to 2000 and then repeat

//var time = 0
//
//function onFrame2(dt) {
//  time += 1
//  // Every frame call update and pass time to all of the "range animators"
//  for (var i in boxes) {
//    boxes[i].update(time)
//  }
//  
//  if (time > 2000) time = 0 // Loop at 2000
//  requestAnimationFrame(onFrame2)
//}
//
//requestAnimationFrame(onFrame2)
// ***************************************************

// This block animates the boxes as the mouse moves. 
window.onmousemove = function(e) {
  for (var i in boxes) {
    boxes[i].update(e.pageX)
  }
} 


