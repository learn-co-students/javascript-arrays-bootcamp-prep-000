var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) { // example: array == [1,2,3] and element == 'foo'
    return [element, ...array]// var newArray = [element, ...array] -- what this looks like is ['foo', 1,2,3]
}