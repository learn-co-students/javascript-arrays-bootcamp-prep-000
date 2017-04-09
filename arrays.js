var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(whee, whoops){
  return [whoops, ...whee]
  // return whee
}

function destructivelyAddElementToBeginningOfArray(whee, whoops){
  // whee = [whoops,...whee]
  whee.unshift(whoops)
  return whee
}

function addElementToEndOfArray(whee, whoops){
  return [...whee, whoops]
  // return whee
}

function destructivelyAddElementToEndOfArray(whee, whoops){
  whee.push(whoops)
  return whee
}

function accessElementInArray(whee, index){
  return whee[index]
}

function destructivelyRemoveElementFromBeginningOfArray(whee){
  whee.shift()
  return whee
}

function removeElementFromBeginningOfArray(whee){
  //whee.slice(0,1)
  var length = whee.length
  return whee.slice(1,length)
}

function destructivelyRemoveElementFromEndOfArray(whee){
  whee.pop()
  return whee
}

function removeElementFromEndOfArray(whee){
  var length = whee.length
  return whee.slice(0,length-1)
}
