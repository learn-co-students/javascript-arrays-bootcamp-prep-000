var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"]


// adds element to beginning of array, and returns the same array
// does not modify original array, makes a new one.
function addElementToBeginningOfArray(array, element){
   array=[];
   array.unshift(element)
  return array
}

// adds element to beginning of array, and returns the same array
// overwrites the original array.
function destructivelyAddElementToBeginningOfArray(array, element){
  array = [];
  array = [element,...array]
  return array
}



function addElementToEndOfArray(array, element){
  array = [];
  return [array,...element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array = [];
  array = [array,...element]
  return array
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
  array.slice(0,1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array.slice(0,array.length-1)
  return array
}


