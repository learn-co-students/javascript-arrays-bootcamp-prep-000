var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, 'foo') {
return ['foo', ...array]
}

function destructivelyAddElementToBeginningOfArray(array, 'foo') {
array = ['foo', ...array]
return array
}

function addElementToEndOfArray(array, 'foo') {
return [...array, 'foo']
}

function destructivelyAddElementToEndOfArray(array, 'foo') {
array = [...array, 'foo']
return array
}
