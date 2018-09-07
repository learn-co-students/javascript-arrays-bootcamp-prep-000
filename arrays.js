var chocolateBars=['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (arr1, ele1) {
  var arr2=[ele1,...arr1]
  return arr2
}

function destructivelyAddElementToBeginningOfArray(arr1,ele1) {
  arr1.unshift(ele1)
  return arr1
}

function addElementToEndOfArray (arr2, ele2) {
  var arr3=[...arr2,ele2]
  return arr3
}

function destructivelyAddElementToEndOfArray(arr2,ele2) {
  arr2.push(ele2)
  return arr2
}

function accessElementInArray (arr1,index) {
  return arr1[index]
}

function destructivelyRemoveElementFromBeginningOfArray (arr1) {
  arr1.shift()
  return arr1
}

function removeElementFromBeginningOfArray (arr1) {
  return arr1.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (arr1) {
  arr1.pop()
  return arr1
}

function removeElementFromEndOfArray (arr1) {
  return arr1.slice(0,length-1)
}


