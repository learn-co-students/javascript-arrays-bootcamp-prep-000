var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a,e){
  const aNew = a.unshift(e)
  return aNew
}

function destructivelyAddElementToBeginningOfArray(a,e){
  return a.unshift(e)
}