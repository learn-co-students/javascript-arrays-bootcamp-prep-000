var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(inarray, bar){
  const outarray = [bar, ...inarray]
  return outarray
};

function destructivelyAddElementToBeginningOfArray(inarray, bar){
  inarray.unshift(bar)
  return inarray
};

function addElementToEndOfArray(inarray, bar){
  const endarray = [...inarray, bar ]
  return endarray
};

function destructivelyAddElementToEndOfArray(inarray, bar){
  inarray.push(bar)
  return inarray
};

function accessElementInArray(inarray, indexelement){
  return inarray[indexelement]
};

function destructivelyRemoveElementFromBeginningOfArray(inarray){
  inarray.shift()
  return inarray
};

function removeElementFromBeginningOfArray(inarray){
  outarray = inarray.slice(1)
  return outarray
};

function destructivelyRemoveElementFromEndOfArray(inarray){
  inarray.pop()
  return inarray
};

function removeElementFromEndOfArray(inarray){
  return inarray.slice(0, inarray.length - 1)
};
