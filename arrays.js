var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");

var addingToBegin = function addElementToBeginningOfArray (chocolateBars, element){
  var element = "foo"
  var newChocolateBars = new Array(element, ...chocolateBars);
  return newChocolateBars;
};

var destructivelyAddElementToBeginningOfArray = function (...chocolateBars, "foo"){
  chocolateBars = ["foo", ...chocolateBars];
  return chocolateBars;
}

var addElementToEndOfArray = function (chocolateBars, "banana"){
  var newNewChocolateBars = [...chocolateBars, "banana"];
  return newNewChocolateBars;
};

var destructivelyAddElementToEndOfArray = function(chocolateBars, "banana"){
  chocolateBars = [...chocolateBars, "banana"];
};
