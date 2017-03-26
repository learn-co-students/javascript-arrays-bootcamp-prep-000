var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray = (array, x) => {
  var newArray = [x, ...array]
  return newArray;
}

destructivelyAddElementToBeginningOfArray = (array, x) =>{
  array.unshift(x);
  return array;
}

addElementToEndOfArray = (array, x) =>{
  var newArray = [...array, x];
  return newArray;
}

destructivelyAddElementToEndOfArray = (array, x) =>{
  array.push(x);
  return array;
}

accessElementInArray = (array, x) => {return array[x];}

destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift();
return array;
}

removeElementFromBeginningOfArray = (array) => {
  return array.slice(1);
}

destructivelyRemoveElementFromEndOfArray = (array) =>{
  array.pop();
  return array;
}

removeElementFromEndOfArray = (array) => {
return array.splice(0, array.length-1)
}