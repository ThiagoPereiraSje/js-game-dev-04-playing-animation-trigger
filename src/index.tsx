import "src/index.css";
import { canvas, ctx } from "src/components/canvas";
import { header } from "./components/header";
import { Explosion } from "src/classes/Explosion";

canvas.width = 500;
canvas.height = 700;
const explosions: Explosion[] = [];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < explosions.length; i++) {
    explosions[i].update();
    explosions[i].draw(ctx);

    if (explosions[i].frame > 5) {
      explosions.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animate);
}

function boomAnimation(e: MouseEvent, canvasPos: DOMRect) {
  const positionX = e.x - canvasPos.left;
  const positionY = e.y - canvasPos.top;

  explosions.push(new Explosion(positionX, positionY));
}

window.addEventListener("load", () => {
  document.body.appendChild(header);
  document.body.appendChild(canvas);
  const canvasPosition = canvas.getBoundingClientRect();

  // Course
  window.addEventListener("click", (e) => boomAnimation(e, canvasPosition));

  // My code
  // canvas.addEventListener("click", (e) => {
  //   ctx.fillStyle = "white";
  //   ctx.fillRect(e.offsetX -25, e.offsetY -25, 50, 50);
  // });

  // Start Game Loop
  animate();
});
