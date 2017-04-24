var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var array = ["element1", "element2"]
function addElementToBeginningOfArray(array, element) {return [element, ...array]}
var array = [1]
function destructivelyAddElementToBeginningOfArray(array, element) {[array.unshift(element)];
  return array}
function addElementToEndOfArray(array, element) {return [...array, element];}
function destructivelyAddElementToEndOfArray(array, element) {array.push(element);
return array;}
