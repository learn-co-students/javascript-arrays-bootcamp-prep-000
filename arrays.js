var chocolateBars = ["snickers" ,"hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  ary = [element,...array]
  return ary;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  console.log(array);
  return array;
}
function addElementToEndOfArray(array, element){
 ary = [...array, element]
 return ary;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  console.log(array);
  return array;
}
function  accessElementInArray(array, index){
  return array[index];

}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  console.log(array);
  return array;
}
function removeElementFromBeginningOfArray(array){
  ary = array.slice(1)
  return ary;
}
function  destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  console.log(array);
  return array;
}
function removeElementFromEndOfArray(array){
ary = array.slice(0,array.length-1) //so we want to copy the array from 0
return ary;                                 //all the way to array.length - 1
}
