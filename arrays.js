var chocolateBars =  ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(list, element) {
  var newList = [element ,...list];
  return newList;
}

function destructivelyAddElementToBeginningOfArray(list, element) {
  return list.unshift(element);
}

function addElementToEndOfArray(list, element) {
  return list.push(element);
}

function destructivelyAddElementToEndOfArray(list, element) {
  var newList = [...list, element];
  return newList;
}

function accessElementInArray(list, index) {
  return list[index];
}

function destructivelyRemoveElementFromBeginningOfArray(list) {
  return list.shift();
}

function removeElementFromBeginningOfArray(list) {
  var withoutFirst = list.slice(1);
  return withoutFirst;
}

function destructivelyRemoveElementFromEndOfArray(list) {
  return list.pop();
}

function removeElementFromEndOfArray(list) {
  var withoutLast = list.slice(0, list.length - 1);
  return withoutLast;
}
