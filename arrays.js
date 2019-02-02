chocolateBars = ['snickers','hundred grand','kitkat','skittles']
lat =[1]
elem = 'foo'
ind = 1

function addElementToBeginningOfArray(lat, elem){
  
  return (['foo',...lat])
}

function destructivelyAddElementToBeginningOfArray (lat, elem){
  return ([elem, ...lat])
}

function addElementToEndOfArray(lat, elem){
  return ([...lat, elem])
}

function destructivelyAddElementToEndOfArray(lat, elem){
  return ([...lat, elem])
}

function accessElementInArray(chocolateBars, ind){
  return (chocolateBars[ind])
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars){
  chocolateBars.shift()
  return (chocolateBars)
}

function removeElementFromBeginningOfArray (chocolateBars){
  return (chocolateBars.slice(1))
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars){
  chocolateBars.pop()
  return (chocolateBars)
}

function removeElementFromEndOfArray (chocolateBars){
  return (chocolateBars.slice(0, chocolateBars.length - 1))
}