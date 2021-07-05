var chocolateBars = ['snickders','hunderd grand','kitkat','skittles']

function addElementToBeginningOfArray(arry , elem){
   elem="foo";
   var newArray = [elem,...arry]
   return newArray;
}
function destructivelyAddElementToBeginningOfArray(array,elem){
elem="foo";
  array.unshift(elem)
  return array;
  
}

function addElementToEndOfArray(array,elem){
 let newArray=[...array,elem]
 return newArray;
}
function destructivelyAddElementToEndOfArray(array,elem){
  array.push(elem)
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
       array.shift(); 
       return array;
}

function removeElementFromBeginningOfArray(array){
  array= array.slice(1);
   return array;
  
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  let newArray=array.slice(0,array.length-1)
  return newArray;
}







