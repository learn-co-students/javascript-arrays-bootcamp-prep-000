
//TODO #1 
var chocolateBars = ['snickers','hundred grand','kitkat', 'skittles'];



//TODO #2
function addElementToBeginningOfArray(array, element){
  return [element,...array];
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  var x = ( element, array);
  x.unshift(element);
  return x;
}
  

//TODO #3 
//ERROR 1!!!!!!!!!!!!!!!!!!!!
function addElementToEndOfArray(array, element){
  return[...array, element];
  
}

///ERROR 2!!!!!!!!!!!!!!!!
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}



//TODO #4 

function accessElementInArray(array, index){
  const x = [1, 2, 3];
  console.log(x[2]);
  return x[2];
}


//TODO #5



function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}


//TODO #6 


function removeElementFromBeginningOfArray(array){
   return array.slice(1);
}

//TODO #7 

//ERROR 5 !!!!!!!!!!!!!!!!!!!!!!!!
function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop(element);
  return array;
}

//TODO #8 

function removeElementFromEndOfArray(array){
  
 return array.slice(0, array.length - 1);
 
}








  
