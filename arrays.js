var chocolateBars = [
'snickers', 'hundred grand', 'kitkat', 'skittles'
]

//Both functions take two parameters, an
//array and an element to add to the beginning of the array,
//and both functions should add the element to the beginning
//of the array and then return the whole array.

function addElementToBeginningOfArray(array, element){
  addElementToBeginning = [element,... array];
     return(addElementToBeginning);
}


function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
  return(array);
}
//altering the original array

function addElementToEndOfArray(array, element){
array = [...array, element];
return(array);
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return(array);
}
//altering original array

//should accept an array and an
//index and return the element at that index.
function accessElementInArray(array, index){
  return array[index];
}
//takes an array as its only argument and removes the
// first element. Your function should then return the
//entire array, and it **should** mutate the array
function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift();
return array;
}
//takes an array as its only argument and removes the first
//element. Your function should then return the entire array,
// and it **should not** mutate the underlying array
function removeElementFromBeginningOfArray(array){
return array.slice(1)
}
//removes the last element. Your function should return
//the entire array, and it **should** mutate the array.
function destructivelyRemoveElementFromEndOfArray(array){
array.pop();
return array;
}

//takes an array as its only argument and removes the last
//element. Your function should return the entire array,
//and it **should not** mutate the array.

function removeElementFromEndOfArray(array){
return array.slice(0,array.length -1);
}
