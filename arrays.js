var chocolateBars = new Array();
chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var ele ="foo";
function addElementToBeginningOfArray(chocolateBars,ele){
  return chocolateBars.unshift(ele)
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,ele){
  return (ele,...chocolateBars)
}

function addElementToEndOfArray (chocolateBars,ele){
  return chocolateBars.push(ele)
}

function destructivelyAddElementToEndOfArray(chocolateBars,ele){
  return (...chocolateBars,ele)
}

function accessElementInArray(chocolateBars,2){
  return chocolateBars(3)
}
