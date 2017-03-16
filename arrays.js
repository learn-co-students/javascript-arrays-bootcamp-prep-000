var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, candy) {
  chocolateBars.unshift(candy);
  return chocolateBars
}

var arrayOfNumbers = [2,3,4,5]

function destructivelyAddElementToBeginningOfArray(arrayOfNumbers, number) {
  arrayOfNumbers = [number, ...arrayOfNumbers]
  return arrayOfNumbers
}

function destructivelyAddElementToEndOfArray(arrayOfNumbers, number) {
  arrayOfNumbers = [arrayOfNumbers..., number]
  return arrayOfNumbers
}