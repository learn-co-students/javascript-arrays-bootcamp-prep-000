var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

// chocolateBars.push("three musketeers") pushes three musketeers as the new last element of the Array
// chocolateBars.unshift("reeses") puts "reeses" as the new first element of the Array
// spread operator ... ["hersheys",...chocolateBars] puts hersheys as first element and the rest of chocolateBars elements are attached  after

function addElementToBeginningOfArray(array, element){
  
  var newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
  array.unshift(element) //this returns the value of new size of the array
  
  return array
  
}

function addElementToEndOfArray(array, element){
  
  var newarray = [...array, element]
  return newarray
  
}

function destructivelyAddElementToEndOfArray(array, element){
  
  array.push(element)
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
  var newarray = array.slice(1)
  return newarray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var newarray = array.slice(0, array.length - 1)
  return newarray
}