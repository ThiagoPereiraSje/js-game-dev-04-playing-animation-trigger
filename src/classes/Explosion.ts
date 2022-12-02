import boom from "src/assets/imgs/boom.png";

export class Explosion {
  x: number;
  y: number;
  frame = 0;
  timer = 0;
  spriteWidth = 200;
  spriteHeight = 179;
  width = this.spriteWidth * 0.7;
  height = this.spriteHeight * 0.7;
  image = new Image();

  constructor(x: number, y: number) {
    this.x = x - this.width / 2;
    this.y = y - this.height / 2;
    this.image.src = boom;
  }

  update() {
    this.timer++;

    if (this.timer % 10 === 0) {
      this.frame++;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
