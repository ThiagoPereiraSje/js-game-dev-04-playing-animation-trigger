export function rectCollision(r1: Rect, r2: Rect) {
  if (
    r1.x > r2.x + r2.width ||
    r1.x + r1.width < r2.x ||
    r1.y > r2.y + r2.height ||
    r1.y + r1.height < r2.y
  ) {
    return false;
  }

  return true;
}

export function circleCollision(c1: Circle, c2: Circle) {
  const dx = c2.x - c1.x;
  const dy = c2.y - c1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const sumOfRadius = c1.radius + c2.radius;

  if (distance <= sumOfRadius) {
    // circles collide (<) or touch each other (===)
    return true;
  }

  return false;
}
