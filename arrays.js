var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  function addElementToBeginningOfArray(array) {
    return ["foo", ...array];
  }
  
function  destructivelyAddElementToBeginningOfArray(array) {
  return [array.unshift('foo')];
}

function addElementToEndOfArray(array) {
  return [...array, "foo"];
}

function destructivelyAddElementToEndOfArray(array) {
  return [array.push('foo')];
}

function accessElementInArray(array) {
  return (array[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

 function removeElementFromBeginningOfArray(array) { 
   return array.slice(1)
 }

 function destructivelyRemoveElementFromEndOfArray(array) {
   return array.pop()
 }
 
 function removeElementFromEndOfArray(array) {
   return array.slice(0, array.length - 1)
 }