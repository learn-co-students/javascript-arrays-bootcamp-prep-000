var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, chocolate) {
  array.unshift(chocolate);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, item) {
  var newChocolateBars = [item, ...array];
  return newChocolateBars;
}
addElementToBeginningOfArray(chocolateBars, 'dairymilk');
destructivelyAddElementToBeginningOfArray(chocolateBars, 'perk'); 