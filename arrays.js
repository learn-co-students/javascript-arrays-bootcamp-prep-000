var numbas = ["seren", "finley", "anders", "durbin", "nietzsche"]
var n = "mckell"
var i = 4

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(numbas, n) {
  return [n, ...numbas]
}

function destructivelyAddElementToBeginningOfArray(numbas, n) {
  return [numbas.unshift(n)]
}

function addElementToEndOfArray(numbas, n) {
  return [...numbas, n]
}

function destructivelyAddElementToEndOfArray(numbas, n) {
  numbas.push(n)
  return numbas
}

function accessElementInArray(numbas, i) {
  return numbas[i]
}

function destructivelyRemoveElementFromBeginningOfArray(numbas) {
  numbas.shift()
  return numbas
}

function removeElementFromBeginningOfArray(numbas) {
  return numbas.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(numbas) {
  numbas.pop()
  return numbas
}

function removeElementFromEndOfArray(numbas) {
  return numbas.slice(-1)
}

function removeElementFromEndOfArray(numbas) {
  return numbas.slice(0, numbas.length - 1)
}

function destructivelyAddElementToBeginningOfArray(numbas, n) {
    numbas.unshift(n)
    return numbas
}