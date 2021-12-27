var context, controller, player, loop

context = document.querySelector('canvas').getContext('2d')

context.canvas.height = 180
context.canvas.width = 320

player = {
  height: 32,
  jumping: true,
  width: 32,
  x: 144,
  x_velocity: 0,
  y: 0,
  y_velocity: 0,
}

controller = {
  left: false,
  right: false,
  up: false,
  keyListener: function(event) {
    var key_state = event.type == 'keydown' ? true : false

    switch (event.keyCode) {
      case 87:
        controller.up = key_state
        break
      case 68:
        controller.right = key_state
        break
      case 65:
        controller.left = key_state
        break
    }
  },
}
loop = function() {
  if (controller.up && player.jumping == false) {
    player.y_velocity -= 20
    player.jumping = true
  }
  if (controller.left) {
    player.x_velocity -= 0.5 //For at "player" akselererer smooth
  }
  if (controller.right) {
    player.x_velocity += 0.5 //For at "player" akselererer smooth
  }

  player.y_velocity += 1.5 //Gravity
  player.x += player.x_velocity
  player.y += player.y_velocity
  player.x_velocity *= 0.9 //Friksjon  (må leggest til eller så synker ikke farten)
  player.y_velocity *= 0.9 //Friksjon

  //dersom player faller til y verdien så koliderer den (bunn linjen)
  if (player.y > 180 - 16 - 32) {
    player.jumping = false
    player.y = 180 - 16 - 32
    player.y_velocity = 0
  }

  context.fillStyle = '#202020'
  context.fillRect(0, 0, 320, 180)
  context.fillStyle = '#ff0000'
  context.beginPath()
  context.rect(player.x, player.y, player.width, player.height)
  context.fill()
  context.strokeStyle = '#ff0000'
  context.lineWidth = 4
  context.beginPath()
  context.moveTo(0, 164)
  context.lineTo(320, 164)
  context.stroke()

  window.requestAnimationFrame(loop)
}
window.addEventListener('keydown', controller.keyListener)
window.addEventListener('keyup', controller.keyListener)
window.requestAnimationFrame(loop)