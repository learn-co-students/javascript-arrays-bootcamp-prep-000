var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)
{
    var array= [1]
    array.unshift("foo")
    return array
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
    var newArray= array
    newArray.unshift("foo")
    return newArray
}

function addElementToEndOfArray(array, element)
{
    var thirdArray= array
    thirdArray.push("foo")
    return thirdArray
}

function destructivelyAddElementToEndOfArray(array, element)
{
    var fourthArray= array
    fourthArray.push("foo")
    return fourthArray
}

function accessElementInArray(array, index)
{
     var accessArray= array[index]
     return accessArray
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
    var removeArray= array
    removeArray.shift()
    return removeArray
}

function removeElementFromBeginningOfArray(array)
{
    var removeArraySafely= array.slice(1)
    return removeArraySafely
}

function destructivelyRemoveElementFromEndOfArray(array)
{
    var popArray= array
    popArray.pop()
    return popArray
}

function removeElementFromEndOfArray(array)
{
    var sliceArray= array.slice(0, array.length -1)
    return sliceArray
}
