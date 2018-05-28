var chocolateBars = ['snickers' , 'hundred geand' , 'kitkat' , 'skittles']


var addElementToBeginningOfArray = function(array,element) {
  var newArray = [element,...array];
    return newArray;
}

var destructivelyAddElementToBeginningOfArray = function(array,element) {
  array() = [array.unshift(element)];
  return array;
}