var chocolateBars = ['snikers', 'hundred gran', 'kitkat', 'skittles']

addElementToBeginningOfArray =(array, element)=>{
    return [element,...array]
}

destructivelyAddElementToBeginningOfArray = (array, element) =>{
    array.unshift(element)
    return array
}

addElementToEndOfArray = (array, element) =>{
    return [...array, element]
}

destructivelyAddElementToEndOfArray = (array, element) => {

    array.push(element)
    return array
}

function accessElementInArray(array, index){
    return array[index]
}

removeElementFromBeginningOfArray = array => array.slice(1)

removeElementFromEndOfArray = array => array.slice(0, array.length - 1)