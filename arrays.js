var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
]

var destructivelyAddElementToBeginningOfArray = function(jim, john) {
    jim.unshift(john)
    return jim
}

var addElementToBeginningOfArray = function(jim, john) {
    return [john,...jim]
}

var destructivelyAddElementToEndOfArray = function(jim, john) {
    jim.push(john)
    return jim
}

var addElementToEndOfArray = function(jim, john) {
    return [...jim,john]
}

var accessElementInArray = function(jessie, jill) {
    return jessie[jill]
}

var destructivelyRemoveElementFromBeginningOfArray = function(funny) {
  funny.shift()
  return funny
}

var removeElementFromBeginningOfArray = function (cue) {
  return cue.slice(1)
}

var destructivelyRemoveElementFromEndOfArray = function (zoom) {
  zoom.pop()
  return zoom
}
var removeElementFromEndOfArray = function (boom) {
  return boom.slice(0, boom.length - 1)
}