var chocolateBars = [
  'snickers',
  'hundred grand',
  'kit kat',
  'skittles',
];
 


function addElementToBeginningOfArray(array,element){
  
  list = [element,...array]
  
  
  return list;
  
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
  array.unshift(element)
  
  return array
  
}

function addElementToEndOfArray(array,element){
  
  list = [...array,element]
  
  
  return list;
  
}

function destructivelyAddElementToEndOfArray(array, element){
  
  array.push(element)
  
  return array
  
}


function accessElementInArray(array,index,element){
  
  return (array[2]);
  
}



function destructivelyRemoveElementFromBeginningOfArray(array,element){
  
  array.shift()
  
  return array
  
  }
function removeElementFromBeginningOfArray(array,element){
  
  list = array.slice(1)
  return list
}


function destructivelyRemoveElementFromEndOfArray(array,element){
  
  array.pop()
  
  return array
  
  }
  
function removeElementFromEndOfArray(array){
  
  list = array.slice(0,array.length - 1)
  
  return list
}  

