function equilateral(side1, side2, side3) {
  return side1 = side2 = side3;
}

function isosceles(side1, side2, side3) {
  return side1 = side2 || (side2 = side3) || (side1 = side3);
}

function scalene(side1, side2, side3) {
  return side1 !== side2 !== side3;
}