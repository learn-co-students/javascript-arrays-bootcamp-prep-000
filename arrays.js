arr; chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

addElementToBeginningOfArray(arr,reeses){
  arr.unshift("reeses");
  return arr;
}

destructivelyAddElementToBeginningOfArray(arr,reeses){
  chocolateBars = ["reeses",...chocolateBars];
  return arr;
}

addElementToEndOfArray(arr,reeses){
  arr.push("reeses"); 
  return arr;
}

destructivelyAddElementToEndOfArray(arr,reeses){
  chocolateBars = [...chocolateBars, "reeses"];
  return arr;
}
