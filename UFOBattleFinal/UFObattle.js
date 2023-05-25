
let myRobot;
let UFOS = [];
let plasmaBlast;
let winningSound;

let backgroundImg;
let backgroundImgDay;
let backgroundImgNight;

let restartButton;



function preload() {
  plasmaBlast = loadSound('data/plasma.mp3');
  winningSound = loadSound('data/victory.mp3');

  backgroundImgDay = loadImage('data/overdag.jpg');
  backgroundImgNight = loadImage('data/achtergrond.jpg');

  fetch('https://api.weatherapi.com/v1/current.json?key=1b53d2f2be024670b42132629232505&q=Kortrijk&aqi=no')
    .then(response => response.json())
    .then(data => {
      const isDay = data.current.is_day === 1;
      if (isDay) {
        backgroundImg = backgroundImgDay;
      } else {
        backgroundImg = backgroundImgNight;
      }
    });



}

function setup() {
  createCanvas(windowWidth, windowHeight);
  myRobot = new robot();
  myRobot.robotY = height - 50;
  for (let i = 0; i < 5; i++) {
    let xPosUFO = random(0, width);
    let yPosUFO = random(0, 350);
    UFOS[i] = new UFO(xPosUFO, yPosUFO, random(1, 4), color('#D9D9D9'), 0.8);
  }

  backgroundImg.resize(width, height);
  restartButton = createButton("REPLAY!");
  restartButton.mouseClicked(restart);
  restartButton.size(100, 50);
  restartButton.style("font-family", "Arial");
  restartButton.style("font-size", "20px");
  restartButton.position(width / 2 - 50, 300);
  restartButton.hide();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  backgroundImg.resize(width, height);
}

function draw() {

  image(backgroundImg, 0, 0);
  myRobot.display();
  myRobot.drive();
  let UfosShot = 0;
  for (let i = 0; i < UFOS.length; i++) {
    if (UFOS[i].alive) {
      UFOS[i].display();
      UFOS[i].move(width, height * 0.55);
    } else {
      UfosShot++;
    }
    if (UfosShot >= UFOS.length) {
      youWin();
    }
  }
}

function mousePressed() {
  myRobot.plasmagunActive = true;
  for (let i = 0; i < UFOS.length; i++) {
    UFOS[i].checkHit();
  }
  if (plasmaBlast.isPlaying()) {
    plasmaBlast.stop();
    plasmaBlast.play();
  } else {
    plasmaBlast.play();
  }
}

function mouseReleased() {
  myRobot.plasmagunActive = false;
}

function youWin() {
  if (!winningSound.isPlaying()) {
    winningSound.play();
  }
  push();
  textSize(60);
  textAlign(CENTER);
  fill(255);
  text("Congratulations! You've defeated all the UFOs!", width / 2, 200);
  pop();

  restartButton.show();
  myRobot.colordance(500);

}

function restart() {
  winningSound.stop();
  for (let i = 0; i < UFOS.length; i++) {
    UFOS[i].alive = true;
  }
  restartButton.hide();
}


