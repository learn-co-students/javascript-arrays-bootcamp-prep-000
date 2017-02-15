var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(goodbye, aloha) {
  return [aloha, ...goodbye]
}

function destructivelyAddElementToBeginningOfArray(goodbye, aloha) {
  goodbye.unshift(aloha)
  return goodbye
}

function addElementToEndOfArray(tag, pin) {
  return [...tag, pin]
}

function destructivelyAddElementToEndOfArray(tag, pin) {
  tag.push(pin)
  return tag
}

function accessElementInArray(n, helper) {
  return n[helper]
}

function destructivelyRemoveElementFromBeginningOfArray(live, laugh, love) {
  live.shift()
  return live
}

function removeElementFromBeginningOfArray(birds, bees) {
  return birds.slice(1)
}

function removeElementFromEndOfArray(starbucks, coffee) {
  return starbucks.slice(0, starbucks.length - 1)
}
