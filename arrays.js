var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  const strictArray = array
  const changedArray = [element, ...strictArray];
  return changedArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  const strictArray = array
  const changedArray =[...strictArray, element];
  return changedArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array){
  var strictArray = array;
  //console.log(strictArray.slice(0,strictArray.length-1));
  return strictArray.slice(0,strictArray.length-1)
}

removeElementFromEndOfArray([1,2,3]);