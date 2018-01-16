var chocolateBars = [
'snickers',
'hundred grand',
'kitkat',
'skittles'
]
function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
}
function addElementToEndOfArray(array, element) {
    return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
}
function accessElementInArray(array, index) {
    var car = [1, 2, 3]

    return car[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
    const days = array
    days.shift()
    return days
}
function removeElementFromBeginningOfArray(array){
    return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop()
    return array
}
function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length - 1)
}

//console.log(addElementToBeginningOfArray(['Bangladesh', 'India'], "Pakistan"));
//console.log(addElementToBeginningOfArray([], 'Thailand'));
//console.log(accessElementInArray([], 2))
console.log(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3]))
console.log(removeElementFromBeginningOfArray([1, 2, 3]));
