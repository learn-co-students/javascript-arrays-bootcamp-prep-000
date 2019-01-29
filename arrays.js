var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var vehicles = [car, boat, truck]
var flier = "plane"
function addElementToBeginningOfArray(vehicles, flier) {
  return [flier, ...vehicles]
}
function destructivelyAddElementToBeginningOfArray(vehicles, flier) {
  vehicles.unshift(flier)
  return vehicles
}
function addElementToEndOfArray(vehicles, flier) {
  return [...vehicles, flier]
}
function destructivelyAddElementToEndOfArray(vehicles, flier) {
  vehicles.push(flier)
  return vehicles
}
function accessElementInArray(vehicles) {
  return vehicles[2]
}
function destructivelyRemoveElementFromBeginningOfArray(vehicles) {
  vehicles.shift()
  return vehicles
}
function removeElementFromBeginningOfArray(vehicles) {
  return vehicles.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(vehicles) {
  vehicles.pop(vehicles)
  return vehicles
}
function removeElementFromEndOfArray(vehicles) {
  return vehicles.slice(0, vehicles.length - 1)
}