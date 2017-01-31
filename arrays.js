var chocolateBars = ['snickers','hundred grand','kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  return([element,...array])
} // should not modify original function, working in console / failing here
function destructivelyAddElementToBeginningOfArray(array, element){
  console.log(array.unshift(element));
  return array
} // should modify original function
function addElementToEndOfArray(array, element){
  return([...array,element]);
} // working in console sort of? / failing here
function destructivelyAddElementToEndOfArray(array, element){
  console.log(array.push(element));
  return array
} // working in console
function accessElementInArray(array, index){
return(array[index])
} // working in console / failing here
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(0);
  return array
} // working in console
function removeElementFromBeginningOfArray(array){
  return(array.slice(1))
} // working in console
function destructivelyRemoveElementFromEndOfArray(array){
  return (array.pop())
} // working in console
function removeElementFromEndOfArray(array){
return(array.slice(0,array.length-1))
} //working in console / failing here
