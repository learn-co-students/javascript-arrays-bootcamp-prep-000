var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(box,item) {
  return ['foo', ...[1]]
}
addElementToBeginningOfArray([1],"foo");

function destructivelyAddElementToBeginningOfArray(box,item) {
  box.unshift(item);
  return box;
}
destructivelyAddElementToBeginningOfArray([1],"foo");

function addElementToEndOfArray(box,item) {
  box1 = [...box,item];
  return box1;
}
addElementToEndOfArray([1],"foo");

function destructivelyAddElementToEndOfArray(box,item) {
  box.push(item);
  return box;
}
destructivelyAddElementToEndOfArray([1],"foo");

function accessElementInArray(box,ind) {
  return box[ind]
}
accessElementInArray([1],0)

function destructivelyRemoveElementFromBeginningOfArray(box) {
  box.shift()
  return box
}
destructivelyRemoveElementFromBeginningOfArray([1])

function removeElementFromBeginningOfArray(box) {
  return box.slice(-2)
}
removeElementFromBeginningOfArray([1,2,3])

function destructivelyRemoveElementFromEndOfArray(box) {
  box.pop()
  return box
}
destructivelyRemoveElementFromEndOfArray([1,2,3])

function removeElementFromEndOfArray(box) {
  return box.slice(0,box.length-1);
}
removeElementFromEndOfArray([1,2,3]);
