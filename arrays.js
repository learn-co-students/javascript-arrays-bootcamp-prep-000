var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


var addElementToBeginningOfArray = (chocolateBars, a) => {
  return [a, ...chocolateBars];
};

var destructivelyAddElementToBeginningOfArray = (chocolateBars, a) => {
  chocolateBars.unshift(a);
  return chocolateBars;
};

var addElementToEndOfArray = (chocolateBars,a) => {
  return [...chocolateBars, a];
};

var destructivelyAddElementToEndOfArray = (chocolateBars, a) => {
  chocolateBars.push(a);
  return chocolateBars;
};

var accessElementInArray = (chocolateBars, a) => {
  return chocolateBars[a];
};

var removeElementFromBeginningOfArray = (chocolateBars) => {
  chocolateBars.shift();
  return chocolateBars;
};

var removeElementFromEndOfArray = (chocolateBars) => {
  chocolateBars.pop();
  return chocolateBars;
};
