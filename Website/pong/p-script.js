var canvas = document.getElementById("game");
var drawing = canvas.getContext("2d");
var paddleWidth = 15;
var paddleHeight = 130;
var paddleLeftY = (canvas.height - paddleHeight) / 2;
var paddleRightY = (canvas.height - paddleHeight) / 2;

function drawPaddleLeft() {
  drawing.beginPath();
  drawing.rect(0, paddleLeftY, paddleWidth, paddleHeight);
  drawing.fillStyle = "#d65a31";
  drawing.fill();
  drawing.closePath();
}

function drawPaddleRight() {
  drawing.beginPath();
  drawing.rect(
    canvas.width - paddleWidth,
    paddleRightY,
    paddleWidth,
    paddleHeight
  );
  drawing.fillStyle = "#d65a31";
  drawing.fill();
  drawing.closePath();
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 87) {
    paddleLeftY -= 30;
  } else if (event.keyCode === 83) {
    paddleLeftY += 30;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 38) {
    paddleRightY -= 30;
  } else if (event.keyCode === 40) {
    paddleRightY += 30;
  }
});

function draw() {
  drawing.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddleLeft();
  drawPaddleRight();
  keepPaddlesInCanvas();
}

setInterval(draw, 10);
