var chocolateBars=new Array();
chocolateBars.push("snickers")
chocolateBars.push("hundred grand")
chocolateBars.push("kitkat")
chocolateBars.push("skittles")
function addElementToBeginningOfArray (array, add){
  console.log("\n[add, ... array]")
chocolateBars= [add,...array]
  return chocolateBars}
function addElementToEndOfArray(array, add){
  console.log("\n[...array , add]")
  chocolateBars = [...array, add]
  return chocolateBars}
function removeElementFromEndOfArray(array){
console.log("\nslice(0, array.length -1)")
  chocolateBars = array.slice(0,array.length-1)
  return chocolateBars}
function removeElementFromBeginningOfArray(array){
  console.log("\nslice(1)")
  chocolateBars= array.slice(1)
  return chocolateBars}
function destructivelyAddElementToEndOfArray(array, add){ //done correctly
  console.log("\npush(add)")
  array.push(add)
  return array}
function destructivelyAddElementToBeginningOfArray(array, add){ //done correctly
  console.log("\nunshift(add)")
  array.unshift(add)
  return array}
function destructivelyRemoveElementFromBeginningOfArray (array){ //done correctly
console.log("\nshift()")
  array.shift()
  return array}
function destructivelyRemoveElementFromEndOfArray(array){ //done correctly
  console.log("\npop()")
  array.pop()
  return array}
function accessElementInArray(array, index){  return array[index]}
/* console.time("M")
console.log(addElementToEndOfArray(chocolateBars,"titeezEND"))
console.log(addElementToEndOfArray(chocolateBars,"titeezEND"))
console.log(addElementToEndOfArray(chocolateBars,"titeezEND"))
console.log(addElementToBeginningOfArray(chocolateBars,"titeez"))
console.log(addElementToBeginningOfArray(chocolateBars,"titeez"))
console.log(addElementToBeginningOfArray(chocolateBars,"titeez"))
console.log(removeElementFromEndOfArray(chocolateBars))
console.log(removeElementFromEndOfArray(chocolateBars))
console.log(removeElementFromEndOfArray(chocolateBars))
console.log(removeElementFromBeginningOfArray(chocolateBars))
console.log(removeElementFromBeginningOfArray(chocolateBars))
console.log(removeElementFromBeginningOfArray(chocolateBars))
console.log(destructivelyAddElementToEndOfArray(chocolateBars,"titeezEND_destruct"))
console.log(destructivelyAddElementToEndOfArray(chocolateBars,"titeezEND_destruct"))
console.log(destructivelyAddElementToEndOfArray(chocolateBars,"titeezEND_destruct"))
console.log(destructivelyAddElementToBeginningOfArray(chocolateBars,"titeez1_destruct"))
console.log(destructivelyAddElementToBeginningOfArray(chocolateBars,"titeez1_destruct"))
console.log(destructivelyAddElementToBeginningOfArray(chocolateBars,"titeez1_destruct"))
console.log(destructivelyRemoveElementFromEndOfArray(chocolateBars))
console.log(destructivelyRemoveElementFromEndOfArray(chocolateBars))
console.log(destructivelyRemoveElementFromEndOfArray(chocolateBars))
console.log(destructivelyRemoveElementFromBeginningOfArray(chocolateBars))
console.log(destructivelyRemoveElementFromBeginningOfArray(chocolateBars))
console.log(destructivelyRemoveElementFromBeginningOfArray(chocolateBars))
console.timeEnd("M") */

/*

*/
