
// wasn't sure what the next step was with moving the computer paddle

function init() {

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let x = 100;
let y = 30;
var ballRadius = 10;
let dx = 2;
let dy = -2;
let rightPressed = false;
let leftPressed = false;
let paddleX = 190;
let paddleWidth = 100;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function drawComputerPaddle() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 100, 10);
}

function drawPlayerPaddle() {
    ctx.fillStyle = 'pink';
    ctx.fillRect(paddleX, 480, paddleWidth, 10);
}


function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}


function drawBall() {
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, 10, 10)
}

function moveBall() {
    ctx.clearRect(x, y, 10, 10);
    ctx.clearRect(paddleX, 480, paddleWidth, 10);
    x += dx;
    y += dy;

    if(rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 7;
        if (paddleX < 0){
            paddleX = 0;
        }}

    drawBall();
    drawPlayerPaddle()
    
    if(x + dx > canvas.width || x + dx < 0) {
            dx = -dx;
        }
    if(y + dy < 0) {
            dy = -dy;
        }
    else if(y + dy > canvas.height-30) {
        if(x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            }
        else {
                alert("GAME OVER");
                document.location.reload();
                clearInterval(interval);
        }
}
}
let interval = setInterval(moveBall, 10);


drawComputerPaddle()
drawPlayerPaddle()
drawBall()
movePlayerPaddle()

}

document.addEventListener('DOMContentLoaded', init)


// if(y + dy < 0 || y + dy > canvas.height-30 || y + dy < 20) {
//     dy = -dy
// }
// if(x + dx > canvas.width || x + dx < 0) {
//     dx = -dx;
// }