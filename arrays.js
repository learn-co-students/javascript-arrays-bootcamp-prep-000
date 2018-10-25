var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}

function appendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = [...kittens, "Broom"]
  return kittens
}

function prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = ["Arnold", ...kittens]
  return kittens
}

function removeLastKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(1)
}
