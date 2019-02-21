  var chocolateBars=["snickers","hundredgrand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element){
  return[element,...array];
  
}

function destructivelyAddElementToBeginningOfArray(array2,element2){
  array2.unshift(element2)
  return array2 
  
}

function addElementToEndOfArray(array2,element2){
return [...array2, element2]}

function destructivelyAddElementToEndOfArray(array3,element3){
 
array3.push(element3);

return array3
}
function accessElementInArray(array5,element5){return element5}
//{return accessElementInArray[1];
//}

