var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray() {
  var addElementToBeginningOfArray = [1]
  var addElementToBeginningOfArray = ['foo', ...addElementToBeginningOfArray]
    return addElementToBeginningOfArray
}

function destructivelyAddElementToBeginningOfArray() {
  var destructivelyAddElementToBeginningOfArray = [1]
    destructivelyAddElementToBeginningOfArray.unshift("foo")
    return destructivelyAddElementToBeginningOfArray
}

function addElementToEndOfArray() {
  var addElementToEndOfArray = [1]
  var addElementToEndOfArray = [...addElementToEndOfArray, 'foo']
    return addElementToEndOfArray
}

function destructivelyAddElementToEndOfArray() {
  var destructivelyAddElementToEndOfArray = [1]
    destructivelyAddElementToEndOfArray.push("foo")
    return destructivelyAddElementToEndOfArray
}

function accessElementInArray() {
  var array = [1, 2, 3]
  console.log(array[2])
}
