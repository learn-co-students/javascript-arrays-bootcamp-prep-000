var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray (array, element) {
 return [element, ... array];
}

["Twix", ... chocolateBars]


function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift (element);
  return array
}


function addElementToEndOfArray (array, element) {
  return [... array, element]
}

[... chocolateBars, "Twix"]


function destructivelyAddElementToEndOfArray (array, element) {
  array.push (element);
  return array
}


function accessElementInArray (array, index) {
  return (array [index] );
}

console.log (chocolateBars [2] );


function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift()
  return array
}

chocolateBars.shift()


function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}

chocolateBars.slice(1)


function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

chocolateBars.pop()


function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1)
}

chocolateBars.slice(0, chocolateBars.length - 1)
