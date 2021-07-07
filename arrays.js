var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(anArr, elem){
  let newArr = [elem, ...anArr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(anArr, elem){
  anArr.unshift(elem);
  return anArr;
}

function addElementToEndOfArray(anArr, elem){
  return [...anArr, elem];
}

function destructivelyAddElementToEndOfArray(anArr, elem){
  anArr.push(elem);
  return anArr;
}

function accessElementInArray(anArr, idx){
  return anArr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(anArr){
  anArr.shift();
  return anArr;
}

function removeElementFromBeginningOfArray(anArr){
  return anArr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(anArr){
  anArr.pop()
  return anArr;
}

function removeElementFromEndOfArray(anArr){
  return anArr.slice(0,-1);
}