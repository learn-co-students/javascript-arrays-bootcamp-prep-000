var chocolateBars=['snickers', 'hundred grand', 'kitkat', 'skittles'];
var array1=[12,14,15]
var array2=[1]
var element=17
var element2='foo'
var index=3



function addElementToBeginningOfArray(array1, element2){
 var array3=[element2,...array1]
 return array3
}

function destructivelyAddElementToBeginningOfArray(array2, element2){
   array2.unshift(element2)
   return array2
}

function accessElementInArray(chocolateBars,index){
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array1){
   array1.shift()
   return array1
}

function removeElementFromBeginningOfArray(array1){
  return array1.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array1){
   array1.pop()
   return array1
}

function removeElementFromEndOfArray(array1){
  return array1.slice(0,array1.length-1)
}

function addElementToEndOfArray(array1,element){
 var array3=[...array1,element]
 return array3
}

function destructivelyAddElementToEndOfArray(array1,element){
    array1.push(element)
    return array1
}