const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;
let foodX = null;
let foodY = null;
let direction = null;

function drawBackground(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 400, 400);
}

function drawSnake() {
    ctx.fillStyle = "green";
    ctx.fillRect(snakeX, snakeY, 20, 20);
}
function spawnFood() {
    foodX = Math.floor(Math.random()*20)*20;
    foodY = Math.floor(Math.random()*20)*20;
}
function drawfood() {
    ctx.fillStyle = "red";
    ctx.fillRect(foodX, foodY, 20, 20);
}
function changeDirection(event){
    if(event.code == 'ArrowUp') {
        direction = 'up';
    } else if (event.code == 'ArrowDown'){
        direction = 'down';
    } else if (event.code == 'ArrowRight'){
        direction = 'right';
    }else if (event.code == 'ArrowLeft'){
        direction = 'left'; 
    }
}




function update() {
    if (direction == 'right'){
        if (snakeX < 380){
            snakeX +=20;
        }else {
            gameOver(); 
        }
    } else if (direction == 'left'){
        if (snakeX > 0){
            snakeX -=20;
        } else {
            gameOver();
        }
    } else if (direction == 'up'){
        if (snakeY > 0){
            snakeY -=20;
        } else {
            gameOver();
        }

    } else if (direction == 'down') 
        {if (snakeY < 380){
            snakeY +=20;
        } else {
        gameOver();
        }
    }
    addEventListener('keydown',changeDirection);
    drawBackground();
    drawfood();
    drawSnake();

}
function gameOver(){
    alert('Game Over');
    direction = null;
}
/*
drawBackground();
drawSnake();
changedirection();
*/
spawnFood();

setInterval(update, 250);