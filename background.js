const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 1080;
let gameSpeed = 5;


const backgroundLayer1 = new Image();
backgroundLayer1.src = 'images/layer1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'images/layer2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'images/layer3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'images/layer4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'images/layer5.png';

// const backgroundLayer6 = new Image();
// backgroundLayer6.height = '50px';
// backgroundLayer6.width = '50px';
// backgroundLayer6.src = 'running_guy.png';




const slider = document.getElementById('slider');
slider.value = gameSpeed;
const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener('change', function(e){
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = e.target.value;
});

class Layer {
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 5760;
        this.height = 1080;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if(this.x <= -this.width){
            this.x = 0;
        }
        this.x = Math.floor(this.x - this.speed);
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);

    }
}
const layer1 = new Layer(backgroundLayer1, gameSpeed);
const layer2 = new Layer(backgroundLayer2, gameSpeed);
const layer3 = new Layer(backgroundLayer3, gameSpeed);
const layer4 = new Layer(backgroundLayer4, gameSpeed);
const layer5 = new Layer(backgroundLayer5, gameSpeed);
// const layer6 =  new Layer(backgroundLayer6, 0);

const gameObjects = [layer1, layer2, layer3, layer4, layer5];

function background_movement(){
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });
    requestAnimationFrame(background_movement);
    
};
background_movement()


// ctx.drawImage(backgroundLayer6, 100, 100, 100, 100);
