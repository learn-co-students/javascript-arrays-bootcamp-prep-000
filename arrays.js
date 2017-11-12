var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){


var array1 =  [element, ...array]

  return array1
}


function destructivelyAddElementToBeginningOfArray(array, element){

array.unshift(element)

  return array
}

function addElementToEndOfArray(array, element) {

  var array1 =  [...array, element]

    return array1

}


function destructivelyAddElementToEndOfArray(array, element){

  array.push(element)

    return array
}



function destructivelyRemoveElementFromEndOfArray(array, element){

array.pop(element)

  return array
}


function removeElementFromEndOfArray(array) {




    return    array.slice(0, array.length - 1)

}

function accessElementInArray(array, index){

return array[index]
}



function destructivelyRemoveElementFromBeginningOfArray(array){

  array.shift(0);

return array
}

function removeElementFromBeginningOfArray(array){
   var array1 = array.slice(1);

return array1
}
