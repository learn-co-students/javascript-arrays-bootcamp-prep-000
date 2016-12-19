var chocolateBars = [1]

function addElementToBeginningOfArray(){
    adding = ["foo",...chocolateBars]
    return adding
}


function destructivelyAddElementToBeginningOfArray(){
    chocolateBars.unshift("foo")
    return chocolateBars


}

function addElementToEndOfArray(){
    addingMore = [...chocolateBars, "foo"]
    return addingMore
}
function destructivelyAddElementToEndOfArray(){
    chocolateBars.push()
    return chocolateBars
}

function accessElementInArray(){ bar = chocolateBars[0]
    return bar
}
function destructivelyRemoveElementFromBeginningOfArray(){ const add = [...addingMore,"kisses"]
    add.shift()
    return add
}
function removeElementFromBeginningOfArray(){ subtract = chocolateBars.slice(1)
    return subtract

}
function destructivelyRemoveElementFromEndOfArray(){ destruct = chocolateBars.pop()
    return chocolateBars

}
