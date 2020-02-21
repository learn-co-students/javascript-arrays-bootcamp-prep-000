var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray() {
  var array = [1]
  return  array.unshift('foo') }


function destructivelyAddElementToBeginningOfArray() {
  var new_array = [1]
  return ["foo",...new_array]
}
console.log(destructivelyAddElementToBeginningOfArray())

function addElementToEndOfArray() {
  var adding_to_end_v1 = [1]
  return adding_to_end_v1.push("foo")
}


function destructivelyAddElementToEndOfArray() {
  var adding_to_end_v2 = [1]
  return [...adding_to_end_v2,"foo"]
}

function accessElementInArray() {
  var example_array = [1,2,3]
  return example_array[2]
}
console.log(example_array)

function accessElementInArray() {
  var example_array_2 = [1,2,3]
  return example_array_2[2]
}

function destructivelyRemoveElementFromBeginningOfArray() {
    var example_array_3 = [1,2,3]
    return example_array_3.slice(1)
}
console.log(example_array_3)

function removeElementFromBeginningOfArray() {
  var example_array4 = [1,2,3]
  return example_array4.slice(0, example_array4.length - 1)
}

function destructivelyRemoveElementFromEndOfArray() {
  var example_array5 = [1,2,3]
  return example_array5.pop()
}


