function createMatrix(size) {
  return Array.from({ length: size }, () => Array(size).fill(1));
}

function neutron(matrix) {
  matrix[0] = Array.from({ length: matrix.length }, () => "n");
  return matrix;
}

function electron(matrix) {
  const n = matrix.length;

  matrix[0].fill("e");

  for (let i = 1; i < n; i++) {
    matrix[i] = new Array(n);
    matrix[i].fill("1");
    matrix[i][0] = "1";
    matrix[i][n - 1] = "e";
  }

  return matrix;
}

function proton(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    matrix[i][0] = "p";
    matrix[i][n - 1] = "p";
  }

  matrix[0].fill("p");
  matrix[n - 1].fill("p");
  matrix[n - 2][n - 2] = "p";
  matrix[n - 1][n - 1] = "1";

  return matrix;
}

function cyclotron(particle, size) {
  const matrix = createMatrix(size);
  switch (particle) {
    case "e":
      return electron(matrix);
    case "p":
      return proton(matrix);
    case "n":
      return neutron(matrix);
    default:
      return matrix.map((row) => row.map((col) => "1"));
  }
}

// Case 4x4

//electron
console.log("Electron 4x4");
console.log(cyclotron("e", 4));

//proton
console.log("Proton 4x4");
console.log(cyclotron("p", 4));

//neutron
console.log("Neutron 4x4");
console.log(cyclotron("n", 4));

//empty
console.log("Empty 4x4");
console.log(cyclotron("", 4));

// Case 6x6

//electron
console.log("Electron 6x6");
console.log(cyclotron("e", 6));

//proton
console.log("Proton 6x6");
console.log(cyclotron("p", 6));

//neutron
console.log("Neutron 6x6");
console.log(cyclotron("n", 6));

//empty
console.log("Empty 6x6");
console.log(cyclotron("", 6));