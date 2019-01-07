var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var numbers = [1, 2, 3];
function addElementToBeginningOfArray (numbers) {
numbers1 = ['foo', ...numbers]
return numbers1
}

function destructivelyAddElementToBeginningOfArray (numbers) {
numbers.unshift('foo')
return numbers
}

function addElementToEndOfArray (numbers) {
numbers1 = [...numbers, 'foo']
return numbers1
}

function destructivelyAddElementToEndOfArray (numbers) {
 numbers.push('foo')
 return numbers
}

function accessElementInArray (numbers) {
 return numbers[2];
}

function destructivelyRemoveElementFromBeginningOfArray (numbers) {
numbers.shift()
return numbers
}

function removeElementFromBeginningOfArray (numbers) {
numbers1 = numbers.slice(1)
return numbers1
}

function destructivelyRemoveElementFromEndOfArray (numbers) {
numbers.pop()
return numbers
}

function removeElementFromEndOfArray (numbers) {
numbers1 = numbers.slice(0, numbers.length - 1)
return numbers1
}

