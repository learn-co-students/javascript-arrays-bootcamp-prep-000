var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

//function takes in parameter array for a, declares new global variable that is equal to paramter a, unshifts parameter b as first array element in new variable, returns new variable array
function addElementToBeginningOfArray(array,element) {
  newArray = [element,...array]
  return newArray
}
//function takes in paramater array for a, unshifts parameter b as first array element in //paramter a, returns array a
function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array;
}
//function takes in parameter array for a, declares new global variable that is equal to //paramter a, push parameter b as last array element in new variable, returns new variable //array
function addElementToEndOfArray(array,element) {
  newArray = [...array,element]
  return newArray;
}
//function takes in paramater array for a, push parameter b as last array element in //paramter a, returns array a
function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array;
}
//taks array paramter and returns index paramter of that array by simply listing paratemters //as array and element to be accessed
function accessElementInArray(array,index) {
  return array[index];
}
//shifts paramter input array, returns array
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}
//returns array after 1st element slice
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
//returns array after pop method is run
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
//slice array paramteter from 0th element to length-1
function removeElementFromEndOfArray(array) {
  newArray = array.slice(0,array.length -1)
  return newArray
}