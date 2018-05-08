var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

addElementToBeginningOfArray(arr,reeses){
  arr.push(reeses);
  return arr
}

destructivelyAddElementToBeginningOfArray(arr,reeses){
  arr.unshift(reeses) 
  return arr
}

addElementToEndOfArray(arr,reeses){
  arr.unshift(reeses); 
  return arr
}

destructivelyAddElementToEndOfArray(arr,reeses){
  arr.push(reeses)
  return arr
}
