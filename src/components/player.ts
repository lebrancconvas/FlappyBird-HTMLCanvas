import { canvas } from "../canvas";

export class Player {
  x: number;
  y: number;
  r: number;

  constructor() {
    this.x = 10;
    this.y = canvas.height / 2;
    this.r = 10;
  }

  draw(c: CanvasRenderingContext2D) {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI *2, false);
    c.fillStyle = 'Yellow';
    c.fill();
    c.closePath();
  }
};
