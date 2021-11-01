// Pong by Will

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 700;

// Global variables
let score = 0
let paddle1y = 40
let paddle2y = 560
let ballx = 485
let bally = 335

// animate
// requestAnimationFrame(loop);
// function loop() {
//     if ()




//     requestAnimationFrame(loop);
// }

// key events






// background
ctx.fillStyle = "black";
ctx.fillRect(0, 0, cnv.width, cnv.height);
ctx.fillStyle = "white";
for (let y = 10; y <= 680; y += 20) {
    ctx.fillRect(495, y, 10, 10)
}

// paddles
ctx.fillRect(50, paddle1y, 15, 100)

ctx.fillRect(935, paddle2y, 15, 100)

// ball
ctx. fillRect(ballx, bally, 30, 30)

// score
ctx.font = "55px Arial";
ctx.fillStyle = "white";
ctx.fillText(score, 458, 50); 

ctx.font = "55px Arial";
ctx.fillStyle = "white";
ctx.fillText(score, 513, 50); 