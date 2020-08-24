var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

var mars = "mars"

function addElementToBeginningOfArray(chocolateBars, mars) { return [mars,...chocolateBars] }

function destructivelyAddElementToBeginningOfArray(chocolateBars, mars) { chocolateBars.unshift(mars); return chocolateBars; }

function addElementToEndOfArray(chocolateBars, mars) { return [...chocolateBars, mars] }

function destructivelyAddElementToEndOfArray(chocolateBars, mars) { chocolateBars.push(mars); return chocolateBars; }

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) { chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) { return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) { chocolateBars.pop();
  return chocolateBars; }

function removeElementFromEndOfArray(chocolateBars) { return chocolateBars.slice(0, chocolateBars.length - 1) }
