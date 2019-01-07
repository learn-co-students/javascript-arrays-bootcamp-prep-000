var chocolateBars = [
  "snicker",
  "hundred grand",
  "kitkat",
  "skittles",
];

function addElementToBeginningOfArray() {
  return [n,...x]
}

function destructivelyAddElementToBeginningOfArray(x,n) {
  return x.unshift(n)
}

function accessElementInArray(x,n) {
  console.log(x[n])
}

function destructivelyAddElementToBeginningOfArray(x) {
  return x.shift(0)
}

function removeElementFromBeginningOfArray(x) {
  return x.slice(1)
}
