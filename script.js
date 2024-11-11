function setup() {
  createCanvas(400, 400);
  background(173, 216, 230); // Fondo azul claro
  drawGrass();
  drawTurtle();
  drawFlowers();
}

function drawGrass() {
  // Fondo de césped con puntos verdes aleatorios
  for (let i = 0; i < 500; i++) {
      fill(0, random(100, 180), 0, 150); // Verde semi-transparente
      noStroke();
      let x = random(width);
      let y = random(height);
      ellipse(x, y, 2, 2); // Pequeños puntos como césped
  }
}

function drawTurtle() {
  // Caparazón
  fill(34, 139, 34); // Verde oscuro para el caparazón
  ellipse(200, 200, 120, 80);

  // Patas
  fill(34, 139, 34); // Mismo color para las patas
  ellipse(150, 180, 20, 30); // Pata delantera izquierda
  ellipse(250, 180, 20, 30); // Pata delantera derecha
  ellipse(150, 220, 20, 30); // Pata trasera izquierda
  ellipse(250, 220, 20, 30); // Pata trasera derecha

  // Cabeza
  fill(34, 139, 34);
  ellipse(200, 150, 30, 30);

  // Ojos
  fill(0);
  ellipse(193, 145, 5, 5); // Ojo izquierdo
  ellipse(207, 145, 5, 5); // Ojo derecho

  // Detalles del caparazón
  fill(0, 100, 0); // Verde más oscuro para los patrones del caparazón
  ellipse(200, 200, 20, 15); // Centro del caparazón
  ellipse(180, 200, 15, 10); // Izquierda del caparazón
  ellipse(220, 200, 15, 10); // Derecha del caparazón
  ellipse(200, 180, 15, 10); // Parte superior del caparazón
  ellipse(200, 220, 15, 10); // Parte inferior del caparazón
}

function drawFlowers() {
  let numFlowers = 12; // Número de flores alrededor de la tortuga
  let radius = 150; // Distancia desde la tortuga

  for (let i = 0; i < numFlowers; i++) {
      // Posición en círculo alrededor de la tortuga
      let angle = TWO_PI * i / numFlowers;
      let x = 200 + cos(angle) * radius;
      let y = 200 + sin(angle) * radius;

      // Colores y tamaño aleatorios para las flores
      let petalColor = color(random(255), random(255), random(255));
      let centerColor = color(random(255), random(255), 0);
      let flowerSize = random(15, 25); // Tamaño aleatorio de la flor

      drawFlower(x, y, petalColor, centerColor, flowerSize);
  }
}

function drawFlower(x, y, petalColor, centerColor, size) {
  // Dibujar pétalos
  fill(petalColor);
  for (let i = 0; i < 8; i++) {
      let petalX = x + cos(TWO_PI * i / 8) * size;
      let petalY = y + sin(TWO_PI * i / 8) * size;
      ellipse(petalX, petalY, size, size * 1.5);
  }
  // Dibujar centro de la flor
  fill(centerColor);
  ellipse(x, y, size * 0.6, size * 0.6);
}
