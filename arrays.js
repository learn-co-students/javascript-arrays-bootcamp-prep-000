var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array, element) {
  var oldArray = `${array}`;
  return [`${element}`, ...oldArray];
};

/* function destructivelyAddElementToBeginningOfArray(array, element) {
  var OGarray = new Array(`${array}`);
  OGarray.unshift(`${element}`)
  return OGarray
} */
