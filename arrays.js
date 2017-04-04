var chocolateBars= [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray('array','element'){
    chocolateBars.unshift('element')
}

function destructivelyAddElementToBeginningOfArray('array','element'){
    ['element'...chocolateBars]
}
