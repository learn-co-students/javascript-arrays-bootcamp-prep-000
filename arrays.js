var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(matrica, elemenat) {
  var novaMatrica = [elemenat, ...matrica];
  return novaMatrica;
}

function destructivelyAddElementToBeginningOfArray(matrica, elemenat) {
  matrica.unshift(elemenat);
  return matrica;
}

function addElementToEndOfArray(matrica, elemenat) {
  var novaMatrica = [...matrica, elemenat];
  return novaMatrica;
}

function destructivelyAddElementToEndOfArray(matrica, elemenat) {
  matrica.push(elemenat);
  return matrica;
}

function accessElementInArray(matrica, indeks) {
  return matrica[indeks]
}

function destructivelyRemoveElementFromBeginningOfArray(matrica) {
  matrica.shift();
  return matrica;
}

function removeElementFromBeginningOfArray(matrica) {
  var novaMatrica = matrica.slice(1);
  return novaMatrica;
}

function destructivelyRemoveElementFromEndOfArray(matrica) {
  matrica.pop();
  return matrica;
}

function removeElementFromEndOfArray(matrica) {
  var novaMatrica = matrica.slice(0, matrica.length - 1);
  return novaMatrica;
}
