var chocolateBars = ["snickers","hundred grand","kitk","skittles"]

function addElementToBeginningOfArray(chocolateBars,name) {
  return [name, ...chocolateBars] 
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,name) {
  chocolateBars.unshift(name);
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars,name) {
  return [...chocolateBars, name] 
}

function destructivelyAddElementToEndOfArray(chocolateBars,name) {
  chocolateBars.push(name);
  return chocolateBars
}

function accessElementInArray(chocolateBars,index) {
  return chocolateBars[index];
}

var number = [1, 2, 3]

function destructivelyRemoveElementFromBeginningOfArray(number) {
   number.shift()
   
   return number
  }
  
function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1)
}



function destructivelyRemoveElementFromEndOfArray(number) {
 number.pop()
 
 return number
}

function removeElementFromEndOfArray(number) {
 return number.slice(0,number.length - 1)

}
