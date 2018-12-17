var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);



function addElementToBeginningOfArray(array, element) {
  const always = [...array];
  console.log(always.unshift(element));
  return always;
}


function destructivelyAddElementsToBeginningOfArray(array, element) {
  var x = array.unshift(element);
  return x;
}
