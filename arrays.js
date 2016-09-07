var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray = (array, element) => {
  return [element, ...array]
}

destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
}

addElementToEndOfArray = (array, element) => {
  return [...array, element]
}

destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element);
  return array;
}

accessElementInArray = (array, index) => {
  return array[index];
}

destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

removeElementFromEndOfArray = (array) => {
  return array.slice(0, array.length - 1);
}

//chocolateBars.push('heath');//adding heath to the end of the array
//chocolateBars.unshift('milky way');//adding milky way to the beginning of the arry
//['toblerone', ...chocolateBars]//spread operator (...) used to insert an array
//[...chocolateBars, 'toblerone']//spread operator can insert an array in front too
//chocolateBars[2]  = 'toblerone'//add to array in a place. index starts at 0: ["snickers", "hundred grand", "toblerone", "skittles"]
