// Pong by Will

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 700;

// Global variables
let leftScore = 0;
let rightScore = 0;
let paddle1y = 40;
let paddle2y = 560;
let ballx = 485;
let bally = 335;
let wPressed = false;
let sPressed = false;
let upArrowPressed = false;
let downArrowPressed = false;


// animate
requestAnimationFrame(loop);
function loop() {
    // Logic
    // Left Paddle Movement
    if (wPressed) {
        paddle1y -= 5
        if (paddle1y < 10) {
            paddle1y = 10
        }
    } if (sPressed) {
        paddle1y += 5
        if (paddle1y > 590) {
            paddle1y = 590
        }
    } if (upArrowPressed) {
        paddle2y -= 5
        if (paddle2y < 10) {
            paddle2y = 10
        }
    } if (downArrowPressed) {
        paddle2y += 5
        if (paddle2y > 590) {
            paddle2y = 590
        }
    }

    // background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "white";
    for (let y = 10; y <= 680; y += 20) {
        ctx.fillRect(495, y, 10, 10)
    }

    // score
    ctx.font = "55px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(leftScore, 458, 50);

    ctx.font = "55px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(rightScore, 513, 50);

    // paddles
    ctx.fillRect(50, paddle1y, 15, 100)

    ctx.fillRect(935, paddle2y, 15, 100)

    // ball
    ctx.fillRect(ballx, bally, 30, 30)

    requestAnimationFrame(loop);
}

// key events
document.addEventListener("keydown", keydownHandler)
document.addEventListener("keyup", keyupHandler)

function keydownHandler(event) {
    if (event.code === "KeyW") {
        wPressed = true;
    } if (event.code === "KeyS") {
        sPressed = true;
    } if (event.code === "ArrowUp") {
        upArrowPressed = true;
    } if (event.code === "ArrowDown") {
        downArrowPressed = true;
    }
}

function keyupHandler(event) {
    if (event.code === "KeyW") {
        wPressed = false;
    } if (event.code === "KeyS") {
        sPressed = false;
    } if (event.code === "ArrowUp") {
        upArrowPressed = false;
    } if (event.code === "ArrowDown")
        downArrowPressed = false;
}

