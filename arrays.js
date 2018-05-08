var chocolateBars = [snickers, hundredgrand, kitkat, skittles];

addElementToBeginningOfArray(chocolateBars,reeses){
  chocolateBars.push("reeses");
  return 'chocolateBars'
}

destructivelyAddElementToBeginningOfArray(chocolateBars,reeses){
  chocolateBars = ["reeses"...chocolateBars];
  return 'chocolateBars'
}

addElementToEndOfArray(chocolateBars,reeses){
  chocolateBars.unshift("reeses");
  return 'chocolateBars'
}

destructivelyAddElementToEndOfArray(chocolateBars,reeses){
  chocolateBars[4]= ["reeses"];
  return 'chocolateBars'
}
