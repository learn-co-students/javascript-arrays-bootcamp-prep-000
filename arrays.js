var chocolateBars = [
"snickers",
"hundred grand",
"kitkat",
"skittles"
]
function addElementToBeginningOfArray(array, element){
  var array = [1];
  ['foo', ...array];
  return ['foo', 1]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return ['foo', 1]
}  
function addElementToEndOfArray(array, element){
  var array = [1];
  [...array, 'foo']; 
  return [1, 'foo']
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return [1, 'foo']
}
  function accessElementInArray(array, index){
  var array =[1,2,3];
   return array[2];
}
function removeElementFromBeginningOfArray(array){
  var array = [1,2,3];
  array.shift()
  return array
}
function removeElementFromEndOfArray(array){
  var array = [1,2,3];
  array.pop()
  return array
}