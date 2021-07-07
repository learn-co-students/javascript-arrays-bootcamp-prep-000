var chocolateBars = ["snickers",
                     "hundred grand",
                     "kitkat",
                     "skittles"]
function addElementToBeginningOfArray (array, element) {
var newarray = [element, ...array]
return newarray
}
                     function addElementToEndOfArray (array, element) {
                       var newarray = [...array, element]
                       return newarray
                     }
                     function destructivelyAddElementToBeginningOfArray (array, element) {
                     array.unshift(element)
                     return array
                     }
                     function destructivelyAddElementToEndOfArray (array, element) {
                       array.push(element)
                       return array
                     }
                     function accessElementInArray (array, index) {
                       console.log(array[index])
                       return array[index]
                     }
                     function destructivelyRemoveElementFromBeginningOfArray (array) {
                       array.shift()
                       return array
                     }
                     function removeElementFromBeginningOfArray (array) {
                       return array.slice(1)
                     }
                     function destructivelyRemoveElementFromEndOfArray(array) {
                       array.pop()
                       return array
                     }
                     function removeElementFromEndOfArray (array) {
                       return array.slice(0, array.length - 1)
                     }
