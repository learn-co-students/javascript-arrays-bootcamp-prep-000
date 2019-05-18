var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
] // passed

function addElementToBeginningOfArray(golfClubs, Club){
  var golfBag = [Club, ...golfClubs]
  return golfBag
} // passed

function destructivelyAddElementToBeginningOfArray(golfClubs, Club){
  golfClubs.unshift(Club)
  return golfClubs
} // passed

function addElementToEndOfArray(golfClubs, Club){
  var golfBag = [...golfClubs, Club]
  return golfBag
} // passed

function destructivelyAddElementToEndOfArray(golfClubs, Club){
  golfClubs.push(Club)
  return golfClubs
} // passed

myClubs = ['Putter', 'Driver', 'Wedge']

function accessElementInArray(golfClubs, Club){
  return golfClubs[Club]
} // passed

function destructivelyRemoveElementFromBeginningOfArray(golfClubs){
  golfClubs.shift()
  return golfClubs
} // passed

function removeElementFromBeginningOfArray(golfClubs){
  return golfClubs.slice(1)
} // passed --- see below...

// START
// in the Console

// var golfClubs = ["Driver", "Putter", "Wedge"]

// function removeElementFromBeginningOfArray(golfClubs){
  // return golfClubs.slice(1)
// }

// golfClubs
// (3) ["Driver", "Putter", "Wedge"]
// golfClubs.slice(1)
// (2) ["Putter", "Wedge"]

// END

function destructivelyRemoveElementFromEndOfArray(golfClubs){
  golfClubs.pop()
  return golfClubs
} // passed

function removeElementFromEndOfArray(golfClubs){
  return golfClubs.slice(0, golfClubs.length - 1)
}
