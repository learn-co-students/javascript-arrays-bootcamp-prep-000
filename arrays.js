 var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
   var a = [element, ...array];
   return a;
 }
addElementToBeginningOfArray([1], 'foo');

function addElementToEndOfArray(array,element){
  var a = [...array, element];
  return a;
}
addElementToEndOfArray([1], 'foo');


function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}
destructivelyAddElementToBeginningOfArray([1], 'foo');

  function destructivelyAddElementToEndOfArray(array,element){
    array.push(element);
    return array;
  }
  destructivelyAddElementToEndOfArray([1], 'foo');

  function accessElementInArray (array, index){
    return array[index];
  }
  accessElementInArray([1, 2, 3],2);

  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
  }
  destructivelyRemoveElementFromBeginningOfArray([1, 2, 3]);

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array;
}
removeElementFromBeginningOfArray([1, 2, 3]);

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
destructivelyRemoveElementFromEndOfArray([1, 2, 3])

  function removeElementFromEndOfArray(array){
    return array.slice(0,array.length-1);
  }
removeElementFromEndOfArray([1, 2, 3]);
