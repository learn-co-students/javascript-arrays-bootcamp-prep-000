var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (anArr, anElem) {
  var newArr = [anElem, ...anArr];

  return newArr;
}

function destructivelyAddElementToBeginningOfArray (anArr, anElem) {
  anArr.unshift(anElem);

  return anArr;
}

function addElementToEndOfArray (anArr, anElem) {
  var newArr = [...anArr, anElem];

  return newArr;
}

function destructivelyAddElementToEndOfArray (anArr, anElem) {
  anArr.push(anElem);

  return anArr;
}

function accessElementInArray (anArr, idx) {
  return anArr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray (anArr, anElem) {
  anArr.shift(anElem);

  return anArr;
}

function removeElementFromBeginningOfArray (anArr, anElem) {
  var newArr = anArr.slice(1);

  return newArr;
}

function destructivelyRemoveElementFromEndOfArray (anArr) {
  anArr.pop();

  return anArr;
}

function removeElementFromEndOfArray (anArr) {
  var newArr = anArr.slice(0, anArr.length - 1);

  return newArr;
}
