var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  // here we want to do a non destructive way of adding an element to an array
  // what can we use to non destructively add an element? I would check the lesson under spread operator
  // so array in the test is defined as [1], so if [...array] is a clone of [1], if we did [element, ...array], 'foo' (element) is set as the first element
  // that being said the spread operator is spread inside a new array which makes it non destructive - we don't modify that original array. Make sense?
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // we want to use our array parameter;
  array.unshift(element); // we don't want to return this because it give us back the length of the modified array;
  return array; // since it's permenantly modified we can just return the array; make sense?
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  array = [1, 2, 3, 2]
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1);
}
