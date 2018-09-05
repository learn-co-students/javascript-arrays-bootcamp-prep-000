var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  function addElementToBeginningOfArray(array) {
    return ["foo", ...array];
  }
  
function  destructivelyAddElementToBeginningOfArray(array) {
  return [array.unshift('foo')];
}

  