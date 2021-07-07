var chocolateBars = ["snickers"[0], "hundred grand"[1], "kitkat"[2], "skittles"[3]];

function addElementToBeginningOfArray(chocolateBars){
return ["foo", ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars){
chocolateBars.unshift("foo");
return chocolateBars;
}

function addElementToEndOfArray(chocolateBars){
return [...chocolateBars, "foo"];
}

function destructivelyAddElementToEndOfArray(chocolateBars){
chocolateBars.push("foo");
return chocolateBars;
}

function accessElementInArray(chocolateBars){
return (chocolateBars[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
chocolateBars.shift();
return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
chocolateBars.pop();
return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
return chocolateBars.slice(0, chocolateBars.length - 1);
}

