import Pyramid from './pyramid/Pyramid'

var canvas  = document.createElement('canvas')
var ctx = canvas.getContext("2d");

document.body.appendChild(canvas);
resizeCanvas();
const width = canvas.width;
const height = canvas.height;

const game = new Pyramid(ctx, [width, height]);

canvas.addEventListener('click', (e) => {
    game.onClick(e.x, e.y);
    ctx.clearRect(0, 0, width, height);
    game.draw();
})

function resizeCanvas() {
    canvas.setAttribute("width", 800)
    canvas.setAttribute("height", 600)
}

game.draw();
