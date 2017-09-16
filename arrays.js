var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array,element){

  array=new Array()
return array=[element,...array]

}
function destructivelyAddElementToBeginningOfArray(array,element){


  return  array.unshift(element)
}
function addElementToEndOfArray(array,element){
  array= new Array()
  return array=[...array, element]
}
function destructivelyAddElementToEndOfArray(array,element){

  return array.push(element)
}
function accessElementInArray(array,i){

return array[i]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
   return array
}
function removeElementFromBeginningOfArray(array){

   array.slice(0)
   return array

}
function destructivelyRemoveElementFromEndOfArray(array){

  array.pop()
  return array
}

function removeElementFromEndOfArray(array){

  return array.slice(0, array.length - 1)
}
