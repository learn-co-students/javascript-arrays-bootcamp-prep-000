 var chocolateBars=['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
   array.unshift(element)
  return array;
}

function addElementToEndOfArray(array,element){
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array,element){
   array.push(element)
   return array;
}

 function accessElementInArray(array,index){
   //return array[0];
   //array[0]
   //array[index]
   //array['index']
   //return [array,index];
   return array[index];
 }