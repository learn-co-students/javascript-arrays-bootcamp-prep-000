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
