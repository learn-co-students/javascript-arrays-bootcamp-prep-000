var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");
var element1 = "almondjoy";

function addElementToBeginningOfArray(chocolateBars, element1) {
  var narray = [element1, ...chocolateBars];
  return narray;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element1) {
  chocolateBars.unshift(element1);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, element1) {
  var narray = [...chocolateBars, element1];
  return narray;
}

function destructivelyAddElementToEndOfArray(chocolateBars, element1) {
  chocolateBars.push(element1);
  return chocolateBars;
}

var names = ["Sheila", "Susan", "Bob", "Buddy"];
var index = 1;
function accessElementInArray(names, index) {
  return names[index];
}

var stuff = ["thing1, thing2", "thing3", "thing4","thing5"];
function destructivelyRemoveElementFromBeginningOfArray(stuff) {
  stuff.shift();
  return stuff;
}

var cats = ["Milo", "Garfield", "Otis"];
function removeElementFromBeginningOfArray(cats) {
  cats = cats.slice(1);
  return cats;
}

var iceCreams = ["chocolate", "vanilla", "raspberry"];
function destructivelyRemoveElementFromEndOfArray(iceCreams) {
 iceCreams.pop();
 return iceCreams;
}

function removeElementFromEndOfArray(iceCreams) {
  iceCreams = iceCreams.slice(0, iceCreams.length - 1);
  return iceCreams;
}