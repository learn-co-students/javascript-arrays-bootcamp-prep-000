
var chocolateBars = [snickers, hundred grand, kitkat, skittles]

function addElementToBeginningOfArray(array, element) {
    var chocolateBars = [snickers, hundred grand, kitkat, skittles ]
    chocolateBars = [almond joy, ...]
    return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var chocolateBars = [snickers, hundred grand, kitkat, skittles ]
  chocolateBars.unshift("almond joy")
  return chocolateBars
}

function addElementToEndOfArray(array, element) {
  var chocolateBars = [snickers, hundred grand, kitkat, skittles ]
  chocolateBars = [..., almond joy]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(array, element) {
  var chocolateBars = [snickers, hundred grand, kitkat, skittles ]
  chocolateBars.push("almond joy")
  return chocolateBars
}

function accessElementInArray(array, index) {
  var chocolateBars = [snickers, hundred grand, kitkat, skittles ]
  return chocolateBars[3]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var chocolateBars = [snickers, hundred grand, kitkat, skittles ]
  chocolateBars.shift
  return chocolateBars
}

  function RemoveElementFromBeginningOfArray(array) {
    var chocolateBars = [snickers, hundred grand, kitkat, skittles ]
    chocolateBars = chocolateBars.slice(1)
    return chocolateBars
  }

  function destructivelyRemoveElementFromEndOfArray(array) {
    var chocolateBars = [snickers, hundred grand, kitkat, skittles ]
    chocolateBars.pop
    return chocolateBars
  }

  function removeElementFromEndOfArray(array) {
    var chocolateBars = [snickers, hundred grand, kitkat, skittles ]
    chocolateBars.slice(0, chocolateBars.length -1)
    return chocolateBars
  }
