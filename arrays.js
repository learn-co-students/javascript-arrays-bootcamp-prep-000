
var chocolateBars = [
  `snickers`,
  `hundred grand`,
  `kitkat`,
  `skittles`
];
function addElementToBeginningOfArray (array, element){
[element...array]
}
function destructivelyAddElementToBeginningOfArray (array, element) {
  unshift.array(element);
}
addElementToBeginningOfArray();
destructivelyAddElementToBeginningOfArray();
