var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var clothes = ['shirt', 'shoes', 'hat']
var f = 'foo'

function addElementToBeginningOfArray (clothes, f) {
  clothes = ["foo", ...clothes];
  return (clothes)
}

var meats = ['turkey', 'pork', 'chicken']
var f = 'foo'
function destructivelyAddElementToBeginningOfArray (meats, f) {
  meats.unshift('foo');
  return (meats)
}

var guitars = ['gibson', 'fender']
function addElementToEndOfArray (guitars, f) {
  guitars = [...guitars, 'foo'];
  return (guitars)
}

function destructivelyAddElementToEndOfArray (guitars, f) {
  guitars.push('foo');
  return (guitars)
}

var numbers = ['1', '2', '3'];
function accessElementInArray (numbers) {
  return (numbers[2]);
}

function destructivelyRemoveElementFromBeginningOfArray (numbers) {
  numbers.shift()
  return (numbers)
}

function removeElementFromBeginningOfArray (numbers) {
  numbers = numbers.slice(1)
  return (numbers)
}

function destructivelyRemoveElementFromEndOfArray (numbers) {
  numbers.pop()
  return(numbers)
}

function removeElementFromEndOfArray (numbers) {
  numbers = numbers.slice(0, numbers.length - 1)
  return (numbers)
}















