var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var dogs = ['max', 'madb', 'ruca']

function addElementToBeginningOfArray(dogs, x) {
  var moredogs = [x, ...dogs]
  return moredogs
}

var chips = ['doritos', 'takis', 'lays']

function destructivelyAddElementToBeginningOfArray(chips, otherchip) {
  chips.unshift(otherchip)
  return chips
}

var cats = ['cleo', 'charlie', 'char']

function addElementToEndOfArray(cats, extracat) {
  var morecats = [...cats, extracat]
  return morecats
}

function destructivelyAddElementToEndOfArray(cats, extracat) {
  cats.push(extracat)
  return cats
}

function accessElementInArray(cats, index) {
  return cats[2]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  var choco = chocolateBars.slice(1)
  return choco
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
 var otheras = chocolateBars.slice(0, chocolateBars.length - 1)
 return otheras
}