var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];




function destructivelyAddElementToBeginningOfArray(array, foo) {

  array.unshift("foo");
  
  return array ;
}




function addElementToBeginningOfArray(array, element) {
  var newArray =  ["foo",...array] ;
  return newArray ;
}



function addElementToEndOfArray (array, element) {
  var newArray = [...array, "foo"] ;
  return newArray ;
}



function destructivelyAddElementToEndOfArray (array, foo) {
   array.push('foo') ; 
   return array ;
}
 
function accessElementInArray(array, index) {
  return array[index] ;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift() ;
   return array ;
}
  
function removeElementFromBeginningOfArray (array) {
   return array.slice(1) ; 
  
 
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop() ;
  return array ; 
}


function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length - 1)
   
   
}




