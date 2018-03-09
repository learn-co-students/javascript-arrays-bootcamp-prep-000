var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray (list,item) {
  const list2 = [item,...list];
  return list2;
}

function destructivelyAddElementToBeginningOfArray (list,item) {
  list.unshift(item);
  return list;
}

function addElementToEndOfArray (list,item) {
  const list2 = [...list,item];
  return list2;
}

function destructivelyAddElementToEndOfArray (list,item) {
  list.push(item);
  return list;
}

function accessElementInArray (list,pos) {
  return list[pos];
}

function destructivelyRemoveElementFromBeginningOfArray (list) {
  list.shift();
  return list;
}

function removeElementFromBeginningOfArray (list) {
  list = list.slice(1);
  return list;
}

function destructivelyRemoveElementFromEndOfArray (list) {
  list.pop();
  return list;
}

function removeElementFromEndOfArray (list) {
  list = list.slice(0, list.length - 1);
  return list;
}