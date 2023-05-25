class robot {

  constructor() { // default constructor
    this.robotX = width / 2;
    this.robotY = height / 2;
    this.robotSpeed = 5;
    this.robotSize = 1;
    this.plasmagunActive = false;

    this.gunAngle = 0;
    this.timeDelay = 500;
    this.timer = 0;
    this.timeDelayTrigger = false;
    this.lightColor = color('#00FFF0');
    this.rotation = 0;
  }

  display() {

    let robotHeight = 400;
    let wheelDiameter = 100;
    let wheeldistance = 250;
    let wheelCircumference = wheelDiameter * Math.PI;
    let distanceTraveled = Math.abs(this.robotX - (width / 2));
    let rotationDirection = (this.robotX - (width / 2) >= 0) ? 1 : -1; // 1 for moving right, -1 for moving left
    let rotationAngle = (distanceTraveled / wheelCircumference) * (2 * Math.PI) * rotationDirection;

    push();
    translate(this.robotX, this.robotY);
    scale(this.robotSize);

    //body
    noStroke();
    fill('#D9D9D9');
    rect(-65, -50, 380, 70, 10);
    fill('#545454');
    rect(-65, -70, 380, 50, 25);
    fill('#7C7C7C');
    rect(88, -95, 80, 15);
    rect(88, -75, 80, 5);
    fill('#696969');
    rect(93, -80, 70, 5);
    fill('#D9D9D9');
    rect(55, -50, 140, 40);
    rect(185, -70, 130, 80, 20);
    rect(-65, -70, 130, 80, 20);
    fill('#707070');
    rect(-55, -20, 110, 40);
    rect(-55, -55, 110, 80, 40);
    rect(195, -20, 110, 40);
    rect(195, -55, 110, 80, 40);
    fill(this.lightColor);
    rect(80, -35, 90, 40, 20);
    fill('#D9D9D9');
    rect(83, -32, 84, 34, 20);
    fill('#979797');
    ellipse(100, -15, 10, 10);
    ellipse(150, -15, 10, 10);


    //backwheel
    push();
    rotate(rotationAngle); 125
    noStroke();
    fill('#000000');
    ellipse(0, 0, wheelDiameter, wheelDiameter);
    fill('#878787');
    ellipse(0, 0, wheelDiameter * 0.8, wheelDiameter * 0.8);
    fill('#ABABAB');
    ellipse(0, 0, wheelDiameter * 0.7, wheelDiameter * 0.7);
    fill(this.lightColor);
    ellipse(0, 0, wheelDiameter * 0.55, wheelDiameter * 0.55);
    fill('#000000');
    ellipse(0, 0, wheelDiameter * 0.4, wheelDiameter * 0.4);
    fill('#ABABAB');
    ellipse(0, 0, wheelDiameter * 0.2, wheelDiameter * 0.2);

    rectMode(CENTER);
    fill('#ABABAB');
    for (let i = 0; i < 4; i++) {
      rect(-wheelDiameter * 0.02, 0, wheelDiameter * 0.02, wheelDiameter * 0.65);
      rect(wheelDiameter * 0.02, 0, wheelDiameter * 0.02, wheelDiameter * 0.65);
      rotate(PI / 4);
    }

    fill('#000000');
    ellipse(0, 0, wheelDiameter * 0.15, wheelDiameter * 0.15);
    pop();

    //frontwheel
    push();
    translate(wheeldistance, 0)
    rotate(rotationAngle);
    noStroke();
    fill('#000000');
    ellipse(0, 0, wheelDiameter, wheelDiameter);
    fill('#878787');
    ellipse(0, 0, wheelDiameter * 0.8, wheelDiameter * 0.8);
    fill('#ABABAB');
    ellipse(0, 0, wheelDiameter * 0.7, wheelDiameter * 0.7);
    fill(this.lightColor);
    ellipse(0, 0, wheelDiameter * 0.55, wheelDiameter * 0.55);
    fill('#000000');
    ellipse(0, 0, wheelDiameter * 0.4, wheelDiameter * 0.4);
    fill('#ABABAB');
    ellipse(0, 0, wheelDiameter * 0.2, wheelDiameter * 0.2);
    rectMode(CENTER);
    fill('#ABABAB');

    for (let i = 0; i < 4; i++) {
      rect(-wheelDiameter * 0.02, 0, wheelDiameter * 0.02, wheelDiameter * 0.65);
      rect(wheelDiameter * 0.02, 0, wheelDiameter * 0.02, wheelDiameter * 0.65);
      rotate(PI / 4);
    }

    fill('#000000');
    ellipse(0, 0, wheelDiameter * 0.15, wheelDiameter * 0.15);
    pop();

    //arm
    fill('#838383');
    beginShape();
    noStroke();
    vertex(234, - 195);
    vertex(165, - 195);
    vertex(90, - 80);
    vertex(159, - 80);
    endShape(CLOSE);
    fill('#363636');
    beginShape();
    vertex(90, - 80);
    vertex(159, - 80);
    vertex(179, - 110);
    vertex(109, - 110);
    endShape(CLOSE);
    fill('#242424');
    ellipse(112, -94, 7, 7);
    ellipse(152, -94, 7, 7);

    //plasmagun
    push();

    translate(wheeldistance / 2 + 70, -robotHeight / 2);
    this.gunAngle = atan2((mouseY - (this.robotY - robotHeight / 2)), (mouseX - this.robotX - 190));
    if (this.plasmagunActive) {
      stroke(this.lightColor);
      strokeWeight(7);
      line(0, 0, mouseX - this.robotX - 190, mouseY - (this.robotY - robotHeight / 2));
    }
    noStroke();
    rotate(this.gunAngle);
    fill('#C19700');
    rect(0, -10, 120, 20);
    fill('#FFCC18');
    rect(0, -15, 115, 30);
    fill('#6F6F6F');
    rect(0, -15, 110, 30);
    fill('#343434');
    rect(-80, -35, 150, 40, 20);
    rect(-40, -35, 120, 40);
    fill('#B8B8B8');
    rect(-80, -15, 160, 50);
    fill('#ABABAB');
    ellipse(0, 0, 70, 70);
    fill(this.lightColor);
    ellipse(0, 0, 60, 60);
    fill('#ABABAB');
    rect(-32, -10, 64, 20);
    fill('#393939');
    rect(-25, -6, 50, 12, 4);
    fill('#6F6F6F');
    rect(75, -35, 10, 70);
    pop();




    pop();
  }

  drive() {
    if (keyIsDown(81) || keyIsDown(37)) {  // 'Q' key or left arrow key
      this.robotX -= this.robotSpeed; // move left
    } else if (keyIsDown(68) || keyIsDown(39)) {  // 'D' key or right arrow key
      this.robotX += this.robotSpeed; // move right
    }

    // Ensure the robot stays within the screen bounds
    // Ensure the robot stays within the screen bounds

    let minPosX = 65;
    let maxPosX = width - 316;

    if (this.robotX < minPosX) {
      this.robotX = minPosX;
    } else if (this.robotX > maxPosX) {
      this.robotX = maxPosX;
    }
  }


  colordance(timeInterval) {
    this.timeDelay = timeInterval;
    if (millis() - this.timer >= this.timeDelay) {
      this.timeDelayTrigger = !this.timeDelayTrigger;
      this.timer = millis();
    }

    if (this.timeDelayTrigger) {
      this.lightColor = color("#a4de02");
    } else {
      this.lightColor = color('#00FFF0');
    }
  }
}
