
var context, controller, rectangle, loop;
context = document.querySelector("canvas").getContext("2d");


rectangle = { height:64,
              jumping:true,
              width:64,
              x:CANVAS_WIDTH/2 - 64, y:0,
              x_velocity:0, y_velocity:0 
            };


controller = {
  left:false,
  right:false,
  up:false,

  keyListener:function(event) {
    var key_state = (event.type == "keydown")?true:false;

    switch(event.keyCode) {
    // LEFT
      case 65:// 'a' key
        controller.left = key_state;
      break;
      case 37:// 'left' key
        controller.left = key_state;
      break;

    // RIGHT
      case 68:// 'd' key
        controller.right = key_state;
      break;
      case 39:// 'right' key
        controller.right = key_state;
      break;

    // UP
      case 87:// 'w' key
        controller.up = key_state;
      break;
      case 32:// 'spacebar' key
        controller.up = key_state;
      break;
      case 38:// 'spacebar' key
        controller.up = key_state;
      break;
    }
  }
};

loop = function() {

  if (controller.up && rectangle.jumping == false) {
    rectangle.y_velocity -= 60; // jump height
    rectangle.jumping = true;
  }

  if (controller.left) {
    rectangle.x_velocity -= 2;
  }

  if (controller.right) {
    rectangle.x_velocity += 2;
  }

  rectangle.y_velocity += 3; // gravity
  // rectangle.x += rectangle.x_velocity;
  rectangle.y += rectangle.y_velocity;
  gameSpeed += rectangle.x_velocity * .01;

  rectangle.x_velocity *= 0.9;// friction
  rectangle.y_velocity *= 0.9;// friction
  gameSpeed *= .97;// backgournd friction
  if (rectangle.x_velocity == 0) gameSpeed = 0; // makes background stop w box

  // if rectangle is falling below floor line
  if (rectangle.y > 1080 - 16 - 96) {
    rectangle.jumping = false;
    rectangle.y = 1080 - 16 - 96;
    rectangle.y_velocity = 0;
  }

  // if rectangle is going off the left of the screen
  if (rectangle.x < 32) {
    rectangle.x = 32;
  } 
  // if rectangle goes past right boundary
  else if (rectangle.x > CANVAS_WIDTH - 64 - 32) {
    rectangle.x = CANVAS_WIDTH - 64 - 32;
  }

  context.fillStyle = "#202020";
  // context.fillRect(0, 0, 320, 180);// x, y, width, height
  context.fillStyle = "#ff0000";// hex for red
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.fill();
  context.lineWidth = 4;
  context.beginPath();
  context.stroke();

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);
};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);