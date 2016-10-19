chocolateBars=["snickers", "hundred grand","kitkat","skittles"]
addElementToBeginningOfArray=(array, element) => [element, ...array];
destructivelyAddElementToBeginningOfArray=(array, element)=>{
  array.unshift(element);
  return array
}
addElementToEndOfArray=(array,element)=>[...array, element];
destructivelyAddElementToEndOfArray=(array, element)=>{
  array.push(element);
  return array
}
accessElementInArray=(array, index)=>array[index];
removeElementFromBeginningOfArray=(array)=>{
var new_arr=array.slice(1);
return new_arr;
}
removeElementFromEndOfArray=(array)=>{
var new_arr=array.slice(0,array.length-1);
return new_arr;
}
