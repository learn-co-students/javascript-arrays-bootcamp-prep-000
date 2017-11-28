var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element){
  console.log(array);
  var arr2 = [element, ...array]
  return arr2

}

function destructivelyAddElementToBeginningOfArray(array, element) {
  //array
  //array.push(element)
  array.unshift(element)
  return array
}
