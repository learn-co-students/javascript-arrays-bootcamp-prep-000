var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, foo){
  return [foo, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
chocolateBars.unshift(foo);
return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, foo){
  return [...chocolateBars,foo];
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo){
  chocolateBars.push(foo);
  return chocolateBars
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
chocolateBars.shift()
return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars.slice(1)
  chocolateBars = chocolateBars.slice(1)
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(choclateBars){
  choclateBars.pop()
  return choclateBars
}
function removeElementFromEndOfArray(choclateBars){
  choclateBars = choclateBars.slice(0,choclateBars.length - 1)
  return choclateBars
}
