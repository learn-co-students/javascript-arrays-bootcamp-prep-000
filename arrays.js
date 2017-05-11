function (addElementToBeginningOfArray){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  ["milky way", ...chocolateBars]
  return chocolateBars;
}
function (destructivelyAddElementToBeginningOfArray){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  chocolateBars = chocolateBars.unshift("milky way")
  return chocolateBars;
}
function (addElementToEndOfArray){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  [...chocolateBars, "milky way"]
  return chocolateBars;
}
function (destructivelyAddElementToEndOfArray){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  chocolateBars = chocolateBars.push("milky way")
  return chocolateBars;
}
function (accessElementInArray){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  console.log(chocolateBars[0]);
  return chocolateBars;
}
function (destructivelyRemoveElementFromBeginningOfArray){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  chocolateBars = chocolateBars.shift()
  return chocolateBars;
}
function (removeElementFromBeginningOfArray){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  chocolateBars =  chocolateBars.slice(1)
  return chocolateBars;
}
function (destructivelyRemoveElementFromEndOfArray){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  chocolateBars =  chocolateBars.pop()
  return chocolateBars;
}
function (removeElementFromEndOfArray){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  chocolateBars =  chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars;
}
