var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(e, arr){
  return [e, ...arr]
}

function destructivelyAddElementToBeginningOfArray(e, arr){
  return arr.push(e)
}