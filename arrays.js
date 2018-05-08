var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray(chocholateBars,reeses){
  chocolateBars.unshift("reeses");
  return chocolateBars;
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
