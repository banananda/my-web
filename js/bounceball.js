let canvas = undefined;
let ctx = undefined;

// ball size
let bs = 50;

// ball initial position
let x = 0;
let y = 0;

// ball speed
// random between min and max => random * (max - min + 1) + min
let speedx = (Math.random() * (100 - 50 + 1) + 50) / 10;
let speedy = (Math.random() * (100 - 50 + 1) + 50) / 10;

window.onload = () => {
  canvas = document.createElement("canvas");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  document.body.appendChild(canvas);

  ctx = canvas.getContext("2d");

  x = canvas.width / 2;
  y = canvas.height / 2;

  draw();
};

draw = () => {
  requestAnimationFrame(draw);

  if ((x - bs < 0 && speedx < 0) || (x + bs > canvas.width && speedx > 0)) {
    speedx = -speedx;
  } else if (
    (y - bs < 0 && speedy < 0) ||
    (y + bs > canvas.height && speedy > 0)
  ) {
    speedy = -speedy;
  }
  ctx.fillStyle = "#f2b3ff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(x, y, bs, 0, Math.PI * 2);
  ctx.fillStyle = "#5b7bfc";
  ctx.fill();

  x += speedx;
  y += speedy;
};
