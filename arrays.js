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
  golfClubs.unshift()
  return golfClubs
}
