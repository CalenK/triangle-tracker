function equilateral(side1, side2, side3) {
  return side1 === side2 && side1 === side3 && side2 === side3;
}

function notATriangle(side1, side2, side3) {
  return side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1; 
}

function isosceles(side1, side2, side3) {
  return side1 === side2 || (side2 === side3) || (side1 === side3);
}

function scalene(side1, side2, side3) {
  return side1 !== side2 && side2 !== side3 && side1 !== side3;
}


window.addEventListener("load", function() {
  const form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const side1 = parseInt(document.querySelector("input#side1").value);
    const side2 = parseInt(document.querySelector("input#side2").value);
    const side3 = parseInt(document.querySelector("input#side3").value);

    if (equilateral(side1, side2, side3) === true) {
      document.getElementById("equal").removeAttribute("class");
      console.log("class is removed");
    } else if (notATriangle(side1, side2, side3)) {
      document.getElementById("not-triangle").removeAttribute("class");
    } else if (isosceles(side1, side2, side3) === true) {
      document.getElementById("slope").removeAttribute("class");
    } else if (scalene(side1, side2, side3) === true) {
      document.getElementById("not-equal").removeAttribute("class")
    }
  });

  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function() {
    document.getElementById("side1").value = null;
    document.getElementById("side2").value = null;
    document.getElementById("side3").value = null;
  });
});