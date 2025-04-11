let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  colorMode(HSB, 360, 100, 100); // 使用 HSB 色彩模式以便生成鮮豔顏色
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(360), 80, 100) // 隨機鮮豔顏色
    });
  }
}

function draw() {
  background("#ffc2e2"); // 彩通15-3919的近似HSB顏色
  for (let circle of circles) {
    let dynamicSize = map(mouseX, 0, width, 10, 120); // 根據滑鼠位置改變大小
    ellipse(circle.x, circle.y, circle.size + dynamicSize);
    fill(circle.color);
    noStroke();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}
