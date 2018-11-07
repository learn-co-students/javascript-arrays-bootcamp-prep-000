var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

/*addElementToBeginningOfArray function
adds element to an array and doesn't alter the original array*/
function addElementToBeginningOfArray(array, element){
  array = [element,...array]
  return array

  const aarray = array
  }

/*destructivelyAddElementToBeginningOfArray function
adds element to an array and alters original array*/
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array

  const barray = array
  barray.unshift(element)
  return barray
}

/*addElementToEndOfArray function
adds element to the end of an array and doesn't alter the original array*/
function addElementToEndOfArray(array, element){
  array = [...array,element]
  return array

  const carray = array
}

/*destructivelyAddElementToEndOfArray function
adds element to the end of and array and alters the original array*/
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array

  const darray = array
  darray.push(element)
  return darray
}

/*accessElementInArray function
accesses the element in array at the given index*/
function accessElementInArray(array, index){
  return array[index]
}

/*destructivelyRemoveElementFromBeginningOfArray function
returns the array with the first element removed and alters the original array*/
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array

  const earray = array
  earray.shift()
  return erray
}

/*removeElementFromBeginningOfArray function
removes the first element from the array, doesn't alter the original array*/
function removeElementFromBeginningOfArray(array){
  var garray = array//.shift()
  var harray = [...garray]
  harray.shift()
  return harray
  garray
}

/*destructivelyRemoveElementFromEndOfArray function
returns the array with the last element removed and alters the original array*/
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array

  const iarray = array
  iarray.pop()
  return iarray
}

/*removeElementFromEndOfArray function
removes the last element from the array, doesn't alter the original array*/
function removeElementFromEndOfArray(array) {
  var jarray = array//.pop()
  var karray = [...jarray]
  karray.pop()
  return karray
  jarray
}

/*removeFirstKitten function
removes the first kitten from the kittens array and returns
a new array, leaving the kittens array unchanged*/
function removeFirstKitten(){
  var gkittens = kittens
  var hkittens = [...gkittens]
  hkittens.shift()
  return hkittens
  gkittens
}
