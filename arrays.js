

function addElementToBeginningOfArray(arr,e){
    var newArray = arr;

    newArray.unshift(e);
    return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr,e){
    arr.unshift(e);
    return arr;
}

function addElementToEndOfArray(arr,e){
    var newArray = arr;
    newArray.push(e);
    return newArray;

}

function destructivelyAddElementToEndOfArray(arr,e){
    arr.push(e);
}

function accessElementInArray(arr,index){
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
    arr.shift();
    return arr;
}

function removeElementFromBeginningOfArray(arr){
    var sliced = arr;
    sliced.slice(1);
    return sliced;
}

function destructivelyRemoveElementFromEndOfArray(arr){
    arr.pop();
    return arr;

}

 function removeElementFromEndOfArray(arr){
     var removed = arr;
     removed.slice(0,removed.length-1);
     return removed;
 }
