function addElementToBeginningOfArray (array, element) {
  return [element, ...testArray]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.shift(element);
  return array;
}



var testArray = [1, 2, 3]



function addElementToEndOfArray (array, element) {
  return [...testArray, element]
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}



console.log(destructivelyAddElementToEndOfArray(testArray, 4));






