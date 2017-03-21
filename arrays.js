var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b){
  var ice = a;
    return ice = [b, ...ice]
}

function destructivelyAddElementToBeginningOfArray(a, b){
  var ice = a;
  ice.unshift(b)
    return ice
}

function addElementToEndOfArray(a,b){
  var ice = a;
    return ice = [...ice, b]
}

function destructivelyAddElementToEndOfArray(a,b){
  var ice = a;
  ice.push(b)
    return ice
}

function accessElementInArray(a,b){
  var ice = a;
    return (ice[b])
}

function removeElementFromBeginningOfArray(a){
  var ice = a;
  return ice.slice(1)
}

function removeElementFromEndOfArray(a){
  var ice = a;
    return ice.slice(0, ice.length - 1)
}
