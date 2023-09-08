export class Pipe {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;

  constructor(x: number, y: number, height: number, color: string) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = height;
    this.color = color;
  }

  draw(c: CanvasRenderingContext2D) {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.width, this.height);
  }
};
