import boom from "src/assets/imgs/boom.png";
import boomWav from "src/assets/sounds/boom.wav";

export class Explosion {
  x: number;
  y: number;
  frame = 0;
  timer = 0;
  angle = Math.random() * 6.2; // Angle in radians
  spriteWidth = 200;
  spriteHeight = 179;
  width = this.spriteWidth * 0.7;
  height = this.spriteHeight * 0.7;
  image = new Image();
  sound = new Audio();

  constructor(x: number, y: number) {
    // this.x = x - this.width / 2; // Centerilize animation horizontally
    // this.y = y - this.height / 2; // Centerilize animation vertically
    this.image.src = boom;
    this.sound.src = boomWav;

    // When rotate, center image in draw method
    this.x = x;
    this.y = y;
  }

  update() {
    if (this.frame === 0) this.sound.play();

    this.timer++;

    if (this.timer % 10 === 0) {
      this.frame++;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Image rotation
    ctx.save(); // Save the current state of the canvas to ensure rotation only affects this rendering
    ctx.translate(this.x, this.y); // Ratation central point
    ctx.rotate(this.angle);

    ctx.drawImage(
      this.image,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      0 - this.width / 2, // The x and y coordinates are captured in the translate method,
      0 - this.height / 2, // so you only need to center the image
      this.width,
      this.height
    );

    // Restore the canvas context to the original save point
    ctx.restore();
  }
}
