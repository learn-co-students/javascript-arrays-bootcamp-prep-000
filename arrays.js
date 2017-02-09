var chocolateBars = ["snickers" , "hundred grand" , "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
    return [element, ...array]; //use spread operator to temp place element at front of array

}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element); //perm adds element to array
    return array;
}

function addElementToEndOfArray(array, element) {
    return [...array, element]; //uses spread operator to add element to end of array
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);//perm adds element to end of array
    return array;
}

function accessElementInArray(array, index) {
    return array[index];//returns element at index
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift();//perm remove first element
    return array;
}

function removeElementFromBeginningOfArray(array) {
    return array.slice(1);//remove element from position 0 (implied) to 1
}

function destructivelyRemoveElementFromEndOfArray(array) {
    return array.pop();//pops last element off, permanently
}
function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length - 1)//removes last element, starting at position 0 and selecting element whose position is length-1
}