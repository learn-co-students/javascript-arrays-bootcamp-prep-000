function addElementToBeginningOfArray(Element,Array){
return [Element,...Array]
}

function destructivelyAddElementToBeginningOfArray(Element,Array){
return unshift.Array(Element)
}

function addElementToEndOfArray(Element,Array){
return [...Array,Element]
}

function destructivelyAddElementToEndOfArray(Element,Array){
return push.Array(Element)
}
function accessElementInArray(elementIndex,Array){
return Array[elementIndex]
}
function removeElementFromBeginningOfArray(Array){
return Array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(Array){
return Array.pop()
}