var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];



function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}



function destructivelyAddElementToBeginningOfArray(newArray,element){
  newArray.unshift(element);
  return newArray
}



function addElementToEndOfArray(newArray1,element){
  return [ ...newArray1, element]
}



function destructivelyAddElementToEndOfArray(newArray2,element){
  newArray2.push(element);
  return newArray2
}



function accessElementInArray(newArray3,index){
  return newArray3[index]
}



function destructivelyRemoveElementFromBeginningOfArray(newArray4){
  newArray4.shift()
  return newArray4
}



function removeElementFromBeginningOfArray(newArray5){
  return newArray5.slice(1)
}



function destructivelyRemoveElementFromEndOfArray(newArray6){
  newArray6.pop()
  return newArray6
}



function removeElementFromEndOfArray(newArray7){
  return newArray7.slice(0, newArray7.length -1)
}


