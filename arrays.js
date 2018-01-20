///*global describe, it */

//  'chocolateBars'
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
  


//describe('addElementToBeginningOfArray(array, element)', () => {
function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
    
}

  //describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
}

//describe('addElementToEndOfArray(array, element)', () => {
function addElementToEndOfArray(array, element) {
     return [array, ...element]
    }

//describe('destructivelyAddElementToEndOfArray(array, element)', () => {
function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
    }

//describe('accessElementInArray(array, index)', () => {
function accessElementInArray(array, index) {
      return array[index]
    }
  
//describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
function destructivelyRemoveElementFromBeginningOfArray(array) {
      array.shift()
  }
