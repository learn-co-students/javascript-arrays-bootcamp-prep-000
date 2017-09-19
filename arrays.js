var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
function addElementToBeginningOfArray(chocolateBars, element) {
  ["element", ...chocolateBars];
  return addElementToBeginningOfArray
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars.unshift(element)
  return destructivelyAddElementToBeginningOfArray
}
function addElementToEndOfArray(chocolateBars, element) {
  [...chocolateBars, element]
  return addElementToEndOfArray
}
function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  return chocolateBars.push(element)
}
function accessElementInArray(chocolateBars, index) {
  console.log(chocolateBars[3])
  return accessElementInArray
}
