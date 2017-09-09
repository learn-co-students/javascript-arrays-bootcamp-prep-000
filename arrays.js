
var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
]
function addElementToBeginningOfArray(array, element) {
    const new_array = [element, ...array]
    return new_array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
}
function addElementToEndOfArray(array, element) {
    const new_array = [array..., element]
    return new_array
}
function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
}
