let chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

let addElementToBeginningOfArray = (array, element) => array.unshift(element)
let destructivelyAddElementToBeginningOfArray = (array, element) => [element, ...array]

let addElementToEndOfArray = (array, element) => array.push(element)
let destructivelyAddElementToEndOfArray = (array, element) => [...array, element]

let accessElementInArray = (array, index) => array[index]

let removeElementFromBeginningOfArray = (array) => array.shift()

let removeElementFromEndOfArray = (array) => array.pop()