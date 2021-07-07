var chocolateBars = ["godiva", "hershey", "moonstruck"] ;
console.log(chocolateBars);
chocolateBars.push("bridgewater");
console.log (chocolateBars);
chocolateBars.unshift("chocolove");
["devries", ...chocolateBars];
console.log(chocolateBars);
bar = "snickers";

console.log(chocolateBars[3]);


function addElementToBeginningOfArray (){
  return chocolateBars.push("snickers");
};
addElementToBeginningOfArray();
function destructivelyAddElementToBeginningOfArray (){
  return chocolateBars.unshift("kitkat");
};
addElementToBeginningOfArray();
function addElementToEndOfArray (){
  return [chocolateBars, "snickers"];
};
addElementToBeginningOfArray ();
function destructivelyAddElementToEndOfArray (){
  return ["reeses", ...chocolateBars];
};
addElementToBeginningOfArray();

function accessElementInArray(){
  return chocolateBars [2];
};
accessElementInArray();
function destructivelyRemoveElementFromBeginningOfArray(){
  return chocolateBars.shift();
};
destructivelyRemoveElementFromBeginningOfArray();

function removeElementFromBeginningOfArray(){
 return chocolateBars.slice(0);
};
destructivelyRemoveElementFromBeginningOfArray();

function destructivelyRemoveElementFromEndOfArray (){
  return chocolateBars.pop();
}
destructivelyRemoveElementFromEndOfArray();

function removeElementFromEndOfArray (){
  return chocolateBars.slice(0, chocolateBars.length - 1);
};
removeElementFromEndOfArray () ;

function spliceySplice(){
  return chocolateBars.splice(2);
};
spliceySplice();
