var chocolateBars = [
"snickers",
"hundred grand",
"kitkat",
"skittles"
]
function addElementToBeginningOfArray(array, element){
  var array = [1];
  ['foo', ...array];
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  var array = [1];
  array.unshift('foo');
  return array
}  
function addElementToEndOfArray(array, element){
  var array = [1];
  [...array, 'foo']; 
  return array
};
function destructivelyAddElementToEndOfArray(array, element){
  const array = [1];
  array.push('foo');
  return array;
};
  function accessElementInArray(array, index){
  var array =[1,2,3];
  array[2];
  }
function removeElementFromBeginningOfArray(array){
  var array = [1,2,3];
  array.slice(0)
  return array
}
function removeElementFromEndOfArray(array){
  var array = [1,2,3];
  array.pop()
  return array
}