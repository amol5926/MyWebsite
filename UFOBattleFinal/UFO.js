class UFO {

  constructor(xPosP, yPosP, speedP, bodyColorP, UFOSizeP) {  // custom contstructor
    this.xPos = xPosP;
    this.yPos = yPosP;
    this.xSpeed = speedP;
    this.ySpeed = speedP;
    this.bodyColor = bodyColorP;
    this.UFOSize = UFOSizeP;
    this.alive = true;
  }

  display() {
    push();
    translate(this.xPos, this.yPos);
    scale(this.UFOSize);

    noStroke();
    fill('#FF5502');
    ellipse(-80, 10, 25, 10);
    ellipse(80, 10, 25, 10);
    fill('#B10003');
    triangle(-80, 0, 0, -25, 80, 0);
    fill('#E50005');
    triangle(-60, 0, 0, -25, 60, 0);
    fill('#FF3F1A');
    triangle(-40, 0, 0, -25, 40, 0);
    fill('#FF5502');
    triangle(-20, 0, 0, -25, 20, 0);
    fill('bodyColor');
    rect(-100, 3, 200, 8, 50);
    fill('#414143');
    triangle(-60, 14, 0, 35, 60, 14);
    fill('#57595B');
    triangle(-45, 14, 0, 35, 45, 14);
    fill('#7B7D7F');
    triangle(-30, 14, 0, 35, 30, 14);

    pop();
  }

  move(moveWidth, moveHeight) {   // move this object with a certain speed, bouncing off the walls of the countaining box defined by width and height parameters
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
    if ((this.xPos > moveWidth) || (this.xPos < 0)) {
      this.xSpeed = -this.xSpeed;
    }
    if ((this.yPos > moveHeight) || (this.yPos < 0)) {
      this.ySpeed = -this.ySpeed;
    }

  }

  checkHit() {
    if (Math.abs(mouseX - this.xPos) < 100 && Math.abs(mouseY - this.yPos) < 40) {
      this.alive = false;
    }

  }

}  
