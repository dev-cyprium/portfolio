export class Star {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public vx: number,
    public vy: number
  ) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
    }
  }

  static drawConnections(
    ctx: CanvasRenderingContext2D,
    stars: Star[],
    minDistanceTreshold: number,
    maxConnections: number = 1
  ) {
    ctx.globalAlpha = 0.1;
    for (let i = 0; i < stars.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < stars.length; j++) {
        const dist = Math.sqrt(
          Math.pow(stars[i]!.x - stars[j]!.x, 2) +
            Math.pow(stars[i]!.y - stars[j]!.y, 2)
        );
        if (connections > maxConnections) {
          break;
        }

        if (dist < minDistanceTreshold) {
          const opacity = 1;
          ctx.strokeStyle = `rgba(173, 216, 230, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(stars[i]!.x, stars[i]!.y);
          ctx.lineTo(stars[j]!.x, stars[j]!.y);
          ctx.stroke();
          connections++;
        }
      }
    }
    ctx.globalAlpha = 1;
  }
}

export function makeStar(x: number, y: number, radius: number): Star {
  const star = new Star(
    x,
    y,
    radius,
    Math.random() * 0.5 - 0.25,
    Math.random() * 0.5 - 0.25
  );
  return star;
}
