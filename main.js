// Pong by Will
// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1100;
cnv.height = 700;

// Global variables
let leftScore = 0;
let rightScore = 0;
let paddle1x = 50;
let paddle2x = 1035;
let paddle1y = 35;
let paddle2y = 560;
let ballx = 540;
let ballxspeed = 6;
let ballyspeed = 6;
let bally = 337.5;
let wPressed = false;
let sPressed = false;
let upArrowPressed = false;
let downArrowPressed = false;
let framecount = 0;
let leftScorex = 505;


// animate
requestAnimationFrame(loop);
function loop() {
    framecount++
    // Logic
    // Left Paddle Movement
    if (wPressed) {
        paddle1y -= 6
        if (paddle1y < 10) {
            paddle1y = 10
        }
    } else if (sPressed) {
        paddle1y += 6
        if (paddle1y > 590) {
            paddle1y = 590
        }
    }

    if (framecount == 300) {
        ballxspeed = 8
        ballyspeed = 8
        console.log("300")
    }

    // Right paddle movement
    if (upArrowPressed) {
        paddle2y -= 6
        if (paddle2y < 10) {
            paddle2y = 10
        }
    } if (downArrowPressed) {
        paddle2y += 6
        if (paddle2y > 590) {
            paddle2y = 590
        }
    }

    // bounce
    if (ballx + 25 > cnv.width) {
        ballx = cnv.width - 25;
        ballxspeed = -ballxspeed;
    } else if (ballx < 0) {
        ballx = 0;
        ballxspeed = ballxspeed;
    }

    if (bally + 25 > cnv.height) {
        bally = cnv.height - 25;
        ballyspeed = -ballyspeed;
    } else if (bally < 0) {
        bally = 0;
        ballyspeed = ballyspeed * -1;
    }

    // collision with paddle
    // if (le1 < re2 && re1 > le2 && be1 > te2 && te1 < be2)
    if (ballx < paddle2x + 15 && ballx + 15 > paddle2x && bally + 20 > paddle2y && bally < paddle2y + 100) {
        ballx = paddle2x - 15
        ballxspeed -= ballxspeed * 2;
        console.log(ballxspeed * 2)
    }

    if (ballx < paddle1x + 15 && ballx + 15 > paddle1x && bally + 20 > paddle1y && bally < paddle1y + 100) {
        ballx = paddle1x + 15
        ballxspeed += ballxspeed * -2;
        console.log(ballxspeed * 2)
    }

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

    // Move ball
    if (framecount >= 120) {
        ballx += ballxspeed
        bally += ballyspeed
    }



    if (leftScore == 10) {
        leftScorex = 475;
    } else if (leftScore == 100) {
        leftScorex = 445;
    } else if (leftScore == 1000) {
        leftScorex = 415;
    } else if (leftScore == 10000) {
        leftScorex = 385;
    } else if (leftScore == 100000) {
        leftScorex = 355;
    } else if (leftScore == 1000000) {
        leftScorex = 325;
    } else if (leftScore == 10000000) {
        leftScorex = 295;
    }

    // score
    ctx.font = "55px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(leftScore, leftScorex, 50);

    ctx.font = "55px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(rightScore, 563, 50);

    // paddles
    ctx.fillRect(paddle1x, paddle1y, 15, 100)

    ctx.fillRect(paddle2x, paddle2y, 15, 100)

    // ball
    ctx.fillRect(ballx, bally, 20, 20)

    requestAnimationFrame(loop);
}


function ballReset() {
    ballx = 535;
    bally = 335;
    framecount = 120
    let randomspeed = Math.random()
    if (randomspeed < 0.5) {
        ballxspeed = -6
        ballyspeed = -6
    } else {
        ballxspeed = 6
        ballyspeed = 6
    }
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

