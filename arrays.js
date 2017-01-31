var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
]

function addElementToBeginningOfArray(array,addon) {
  var testArray1 = [addon,...array]
  return testArray1
}

function destructivelyAddElementToBeginningOfArray(pants,addon) {
  pants.unshift(addon);
  return pants
}

function addElementToEndOfArray(array, addon) {
  var testArray1 = [...array, addon]
  return testArray1
}

function destructivelyAddElementToEndOfArray(pants, addon) {
  pants.push(addon);
  return pants
}

function accessElementInArray(pants, index) {
  return pants[index]
}

function destructivelyRemoveElementFromBeginningOfArray(pants, index) {
  pants.shift();
  return pants
}

function removeElementFromBeginningOfArray(pants, index) {
  var newpants = pants.slice(1);
  return newpants
}

function removeElementFromEndOfArray(pants, index) {
  pants.pop();
  return pants
}
