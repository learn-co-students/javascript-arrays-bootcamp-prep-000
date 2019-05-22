{
  var chocolateBars =
["snickers", "hundred grand", "kitkat", "skittles"];

  chocolateBars.push("twix");

  console.log(chocolateBars);
}

{
var addElementToBeginningOfArray = ["blue", "orange", "black", "pink"];

  addElementToBeginningOfArray = [...addElementToBeginningOfArray, "green"];
  
  console.log(addElementToBeginningOfArray);
}

{
var destructivelyAddElementToBeginningOfArray = ["king", "queen", "jack", "10"];
  destructivelyAddElementToBeginningOfArray.unshift("ace");
  
  console.log(destructivelyAddElementToBeginningOfArray);
}

{
var addElementToEndOfArray = ["learn", "to"];
 
  addElementToEndOfArray = ["code",...addElementToEndOfArray];
  
  console.log(addElementToEndOfArray);
}

{
var destructivelyAddElementToEndOfArray = ["software", "engineers"];
  
  destructivelyAddElementToEndOfArray.push("rock");

  console.log(destructivelyAddElementToEndOfArray);
}

{
var accessElementInArray = ["women", "who", "code", "rock"];

  console.log(accessElementInArray[0]);
}

{
var destructivelyRemoveElementFromBeginningOfArray = ["2pac", "biggie", "nas", "jay z"];
  
  destructivelyRemoveElementFromBeginningOfArray.shift();
  
  console.log(destructivelyRemoveElementFromBeginningOfArray);
}

{
var removeElementFromBeginningOfArray = ["mac", "dell", "hp", "lenovo"];
  
  removeElementFromBeginningOfArray = removeElementFromBeginningOfArray.slice(1);
  
  console.log(removeElementFromBeginningOfArray);
}

{
var destructivelyRemoveElementFromEndOfArray = ["Earth", "Mars", "Venus"];

  destructivelyRemoveElementFromEndOfArray = destructivelyRemoveElementFromEndOfArray.pop();
  
  console.log(destructivelyRemoveElementFromEndOfArray);
}

{
var removeElementFromEndOfArray = ["lol", "tbt", "lmao", "ikr"];
  
  removeElementFromEndOfArray.slice(0, removeElementFromEndOfArray.length - 1);
  
  console.log(removeElementFromEndOfArray);
}