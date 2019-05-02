var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (chocolateBars, 'twix') {
  return ['twix', ...chocolateBars];
};

function destructivelyAddElementToBeginningOfArray (chocolateBars, 'twix') {
  chocolateBars.unshift('twix')
  return chocolateBars
};
