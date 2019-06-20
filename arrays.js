var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ]

function addElementToBeginningOfArray(myArray1, myElement1) {
  const myNewArray = [myElement1, ...myArray1]
  return myNewArray

}
function destructivelyAddElementToBeginningOfArray(myArray2, myElement2){
  myArray2.unshift(myElement2)
  return myArray2
}
function addElementToEndOfArray(myArray3, myElement3){
  const myNewArray2 = [...myArray3, myElement3]
  return myNewArray2
}
function destructivelyAddElementToEndOfArray(myArray4, myElement4){
  myArray4.push(myElement4)
  return myArray4
}
function accessElementInArray(myArray5, index5){
  return myArray5[index5]

}
function destructivelyRemoveElementFromBeginningOfArray(myArray6){
  myArray6.shift(myArray6)
  return myArray6

}
function removeElementFromBeginningOfArray(myArray7){
  myArray8 = myArray7.slice(1)
  return myArray8
}
function destructivelyRemoveElementFromEndOfArray(myArray9){
  myArray9.pop()
  return myArray9

}
function removeElementFromEndOfArray (array) {
  var newArray = array.slice(0, array.length - 1);
  return newArray; 
} 