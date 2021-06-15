window.onload = () => {
  let canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  let ctx = canvas.getContext("2d");

  // border aja
  ctx.strokeStyle = "#000000";
  ctx.strokeRect(10, 10, 100, 100);

  // fill aja
  ctx.fillStyle = "#c542f5";
  ctx.fillRect(10, 150, 100, 100);

  // bisa fill dan border
  ctx.rect(10, 300, 100, 100);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fill();

  // mulai path baru
  ctx.beginPath();

  // gambar lingkaran
  ctx.arc(200, 100, 50, 0, Math.PI * 2);
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();

  // gambar text
  ctx.lineWidth = 1;
  ctx.font = "50px arial";
  //   ctx.textAlign = "center";
  //   ctx.textBaseline = "bottom";
  ctx.strokeText("Hellow", 200, 200);
  ctx.fillText("World", 200, 250);

  // gambar garis
  ctx.beginPath();
  ctx.moveTo(300, 300);
  ctx.lineTo(300, 500);
  ctx.lineTo(500, 500);
  // auto tutup path
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  //translate, rotate, scale => mengubah posisi kanvas bukan objek

  //save posisi canvas
  ctx.save();
  ctx.translate(825, 325);
  ctx.rotate(Math.PI / 4);
  //   ctx.scale(0.5, 0.5);

  ctx.fillRect(0, 0, 50, 50);

  //balikin posisi canvas
  ctx.restore();
  ctx.fillRect(800, 500, 50, 50);
};
