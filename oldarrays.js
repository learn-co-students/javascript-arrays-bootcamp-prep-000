function addElementToBeginningOfArray(array, "element") {
  return array.unshift("element")
  constant array = [array]
}

function destructivelyAddElementToBeginningOfArray([array],"element") {
  return array.unshift("element")
}

function addElementToEndOfArray([array], 'element') {
  return array.push('element')
  const array = [array]
}

function destructivelyAddElementToEndOfArray([array], 'element') {
  return array.push('element')
}
