
var chocolateBars = ["snikers", "houndred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, foo) {
  var chocolateBars = [..."foo",chocolateBars]

}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
  // const chocolateBars = [chocolateBars]
  const chocolateBarsNew = [..."foo", chocolateBars]

}


function addElementToEndOfArray(chocolateBars,foo) {
  var chocolateBarsNew = [chocolateBars,..."foo"]
}

function destructivelyAddElementToEndOfArray(chocolateBars,foo) {
  const chocolateBars = []
  const chocolateBarsNew = [chocolateBars,..."foo"]
}


function accessElementInArray(chocolateBars, 0) {
  console.log(chocolateBars[0]);

}



function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  const chocolateBars = (chocolateBars.shift)
  console.log(chocolateBars);
}


function removeElementFromBeginningOfArray(chocolateBars) {
const chocolateBars.slice(1);
return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
const chocolateBars = []
chocolateBars.pop();
return chocolateBars;

}

function removeElementFromEndOfArray (chocolateBars) {
  const chocolateBars = []
chocolateBars.slice(0, chocolateBars.lenght -1)
  return chocolateBars;
}
