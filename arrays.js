var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(chocolateBars, crunch){
 return [crunch,...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, crunch){
  chocolateBars.unshift(crunch)
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, crunch){
  return [...chocolateBars, crunch]
}
function destructivelyAddElementToEndOfArray(chocolateBars, crunch){
  chocolateBars.push(crunch)
  return chocolateBars
}
function accessElementInArray(chocolateBars, index){
  return(chocolateBars[index])
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars= chocolateBars.slice(1)
  return chocolateBars
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
}