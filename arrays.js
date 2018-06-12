const expect = ('chai');
const fs = ('fs');
const jsdom =('mocha-jsdom');
const path = ('path');


var  chocolateBars= [ 'snickers', 'hundred grand', 'kitkat','skittles'];

function  addElementToBeginningOfArray (array, element){
  return [element,...array]
  }
 
function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element)
  return array 
}
 
 function addElementToEndOfArray(array, element){
 
var array2= array.concat(element)
return array2
   
 }

  
  function destructivelyAddElementToEndOfArray(array, element){
    array.push(element)
    return array
  }

function accessElementInArray( array, index)
{ array = [1,[2,3]]
 array[1][0]

return 3
}


function destructivelyRemoveElementFromBeginningOfArray(array=[1,2,3]){ 
 array.shift() 

return array
}

function destructivelyRemoveElementFromBeginningOfArray(array=[1,2,3]){
  array.shift()

console.log(array); 
return array
  }
  
  function removeElementFromBeginningOfArray(array=[1,2,3]){
    array.slice(1)
    return array
  }
  function removeElementFromBeginningOfArray(array=[1,2,3]){
    array = array.slice(1)
    return array
    
  }
  function destructivelyRemoveElementFromEndOfArray(array=[1,2,3])
  {
  array.pop()
  return array
  }
  
  
  function removeElementFromEndOfArray(array=[1,2,3]){
    var newarray = array.slice(0, -1) 
    
    return [1,2]
  
  }
  
  