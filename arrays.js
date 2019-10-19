var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"];


function addElementToBeginningOfArray(china, nepal){
  return [nepal, ...china];
}

function destructivelyAddElementToBeginningOfArray(china, nepal){
 china.unshift(nepal);
 return china;
}



function destructivelyAddElementToEndOfArray(china, nepal){
  china.push(nepal);
  return china;
}
 function accessElementInArray(array, index){
   return array[index];
 }
 
 function destructivelyRemoveElementFromBeginningOfArray(china){
   china.shift();
   return china;
 }
 function removeElementFromBeginningOfArray(china){
   return china.slice(1);
 }
 
 function destructivelyRemoveElementFromEndOfArray(china){
   china.pop();
   return china;
 }
 
 function removeElementFromEndOfArray(china){
   return china.slice(0, china.length -1 );
 }
 function addElementToEndOfArray(china, nepal){
   return [...china, nepal];
 }