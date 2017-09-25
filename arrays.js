chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

array = [1,2,3,4,5]

function addElementToBeginningOfArray(array,x) {
 return [x,...array]
}

function destructivelyAddElementToBeginningOfArray(array,x){
  array.unshift(x)
  return array
}

function addElementToEndOfArray(array,element) {
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array,x){
   array.push(x)
   return array
}

function accessElementInArray(array,index){
  ind = array[index]
  return ind
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  myArray = array.slice(1)
  return myArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}


function removeElementFromEndOfArray(array){
  output = array.slice(0,-1)
  return output
}
