// Pong by Will
// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1100;
cnv.height = 700;

// Global variables
let leftScore = 0;
let rightScore = 0;
let paddle1y = 40;
let paddle2y = 560;
let ballx = 537.5;
let ballxspeed = 6;
let ballyspeed = 6;
let bally = 337.5;
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
    } else if (sPressed) {
        paddle1y += 5
        if (paddle1y > 590) {
            paddle1y = 590
        }
    } 
    // Right paddle movement
    if (upArrowPressed) {
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
    
    // Move ball
    ballx += ballxspeed;
    if (ballx + 25 > cnv.width) {
        ballx = cnv.width - 25;
        ballxspeed = -6;
    } else if (ballx < 0) {
        ballx = 0;
        ballxspeed = 4;
    }

    bally += ballyspeed
    if (bally + 25 > cnv.height) {
        bally = cnv.height - 25;
        ballyspeed = -4;
    } else if (bally < 0) {
        bally = 0;
        ballyspeed = 6;
    }

    // collision with paddle
    
    if (ballx + 25 == cnv.width) {
        leftScore++
        ballReset()
    } if (ballx == 0) {
        rightScore++
        ballReset()
    }

    // background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "white";
    for (let y = 10; y <= 680; y += 20) {
        ctx.fillRect(545, y, 10, 10)
    }

    // score
    ctx.font = "55px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(leftScore, 508, 50);

    ctx.font = "55px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(rightScore, 563, 50);

    // paddles
    ctx.fillRect(50, paddle1y, 15, 100)

    ctx.fillRect(1035, paddle2y, 15, 100)

    // ball
    ctx.fillRect(ballx, bally, 25, 25)

    requestAnimationFrame(loop);
}

function ballReset () {
    ballx = 535;
    bally = 335;
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

// function ballMove () {
//     Math.random
//     console.log(Math.random)
//     if (Math.random < 0.5) {
//         ballx--;
//     }
// }
