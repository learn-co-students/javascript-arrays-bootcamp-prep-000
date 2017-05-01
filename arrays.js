var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var newArray = [1]

function addElementToBeginningOfArray(newArray) {

newerArray = ["foo", ...newArray]

return newerArray

}

function destructivelyAddElementToBeginningOfArray(newArray) {

  newArray.unshift("foo")

  return newArray

}

function addElementToEndOfArray(newArray) {

  newestArray = [...newArray, "foo"]

  return newestArray

}

function destructivelyAddElementToEndOfArray(newArray) {
  newArray.push("foo")

  return newArray
}

const numbers = [3, 2, 1]

function accessElementInArray(numbers, index) {
  return numbers[index]
}

function destructivelyRemoveElementFromBeginningOfArray(numbers) {
  numbers.shift();

  return numbers

}

function removeElementFromBeginningOfArray(numbers) {
  return numbers.slice(1);

}

var moreNumbers = [1, 2, 3]

function destructivelyRemoveElementFromEndOfArray(moreNumbers) {
  moreNumbers.pop();

  return moreNumbers;
}

function removeElementFromEndOfArray(numbers) {
  return numbers.slice(0, numbers.length -1);

}
