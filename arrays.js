var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = (array,element)=>{
  return array1 = [element,...array];
}

var destructivelyAddElementToBeginningOfArray=(array,element)=>{
  array.unshift(element)
  return array;
}

var addElementToEndOfArray=(array,element)=>{
  array1 = [...array,element];
  return array1
}

var destructivelyAddElementToEndOfArray=(array,element)=>{
  array.push(element);
  return array;
}
var accessElementInArray=(array,n)=>{
  return array[n];
}

var destructivelyRemoveElementFromBeginningOfArray=(array)=>{
  array.shift();
  return array
}
var removeElementFromBeginningOfArray=(array)=>{
  array.shift();
  return array
}

var destructivelyRemoveElementFromEndOfArray=(array)=>{
  array.pop()
  return array
}

var removeElementFromEndOfArray=(array)=>{
  return array1 = array.slice(0,array.length-1)
  return array
}
