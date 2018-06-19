var chocolateBars

chocolateBars = [ 'snickers',
'hundred grand',
'kitkat',
'skittles']
 var array = chocolateBars
 
addElementToBeginningOfArray = function(array,element) {
  return [element, ...array]
}

destructivelyAddElementToBeginningOfArray = function (array,element) {
  array.unshift(element)
  return array
  }
  
 addElementToEndOfArray = function (array,element) {
   return [...array, element]
 }

destructivelyAddElementToEndOfArray = function (array,element){
  array.push(element)
  return array
 }

accessElementInArray = function (array,index) {
  return array[parseInt(index)]
}

destructivelyRemoveElementFromBeginningOfArray = function (array) {
array.shift()
return array
 
}

removeElementFromBeginningOfArray = function (array){
  array2=array.slice(1)
  return array2
}

destructivelyRemoveElementFromEndOfArray = function(array) {
 array.pop()
 return array
}

removeElementFromEndOfArray = function (array) {
  return array.slice(0, array.length-1)
}

