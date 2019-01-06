var chocolateBars=['snickers','hundred grand','kitkat','skittles']
chocolateBars()
console.log (chocolateBars)

function addElementToBeginningOfArray(a,b){
return[b,...a]
}

function destructivelyAddElementToBeginningOfArray(a,b){
a.unshift(b)
return a 
}

function addElementToEndOfArray(a,b){
  return[...a,b]
}
function destructivelyAddElementToEndOfArray(a,b){
 a.push(b) 
 return a 
}

function accessElementInArray(array,index){
  return array[index]
  
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array=array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array=array.slice(0,array.length-1)
  
  return array
}





