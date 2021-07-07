var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
array = newArray()

function addElementToBeginningOfArray(array, element){
  console.log(array, `${element}`)
  [`${element}`, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  console.log(array,`${element}`)
  array.unshift(`${element}`)
}

function addElementToEndOfArray(array, element){
  console.log(array,`${element}`)
  [ ...array, `${element}`]
}

function destructivelyAddElementToEndOfArray(array, element){
  console.log(array,`${element}`)
  array.push(`${element}`)
}

function accessElementInArray(array, element){
  console.log(array[`${element}`])
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
}



function removeElementFromBeginningOfArray(array){
  array.slice(`${element}`)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
}

function removeElementFromEndOfArray(array){
  array.slice(0, array.lenth - 1)

}
