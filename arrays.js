
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'];

function addElementToBeginningOfArray() {
  var array = [1]

  array.unshift("foo");

  return (array)
}

function destructivelyAddElementToBeginningOfArray() {
  var array = [1]

  array.unshift("foo")

  return (array)

}

function addElementToEndOfArray() {
  var array = [1]

  array.push("foo");

  return (array)
}

function destructivelyAddElementToEndOfArray() {
  var array = [1]

  array2 = [...array, "foo"];

  return (array2)
}
