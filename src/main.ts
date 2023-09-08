import { canvas, ctx, config } from './canvas';
import { Player } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Init.
const player = new Player();

// Game Loop.
function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Animation Code.
  player.draw(ctx); 
};

animate();
