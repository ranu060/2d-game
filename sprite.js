

// let img = new Image();
// img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
// img.onload = function() {
//   init();
// };

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// const scale = 2;
// const width = 16;
// const height = 18;
// const scaledWidth = scale * width;
// const scaledHeight = scale * height;

// // 465 134

// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img,
//                 frameX * width, frameY * height, width, height,
//                 canvasX, canvasY, scaledWidth, scaledHeight);
// }

// const cycleLoop = [0, 1, 0, 2];
// let currentLoopIndex = 0;
// let frameCount = 0;
// let currentDirection = 0;

// function step() {
//   frameCount++;
//   if (frameCount < 15) {
//     window.requestAnimationFrame(step);
//     return;
//   }
//   frameCount = 0;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0);
//   currentLoopIndex++;
//   if (currentLoopIndex >= cycleLoop.length) {
//     currentLoopIndex = 0;
//     currentDirection++;
//   }
//   if (currentDirection >= 4) {
//     currentDirection = 0;
//   }
//   window.requestAnimationFrame(step);
// }

// function init() {
//   window.requestAnimationFrame(step);
// }





// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d');
// const CANVAS_WIDTH = canvas.width = 1920;
// const CANVAS_HEIGHT = canvas.height = 1200;
// let gameSpeed = 5;

const playerImage = new Image();
playerImage.src = 'images/running_guy.png';
const sprite_width = (1000/12.5) ;
const sprite_height = 1000/8;
bruh = 3


function show_guy(){

  //ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh)
  ctx.drawImage(playerImage, sprite_width * bruh, 0, sprite_width, sprite_height, rectangle.x, rectangle.y, 64, 64)
  requestAnimationFrame(show_guy);
};
show_guy()
