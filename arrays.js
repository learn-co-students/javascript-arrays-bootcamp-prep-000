/* CHOCOLATE BARS VARIABEL */

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

/* ADD ELEMENT AT BEGINNING OF ARRAY */

function addElementToBeginningOfArray(arr, element) {

    let newArr = arr.map(function (currentValue) {
        return currentValue;
    });

    newArr.unshift(element);

    return newArr;
}

/* DESTRUCTIVE ADD ELEMENT                  */

function destructivelyAddElementToBeginningOfArray(arr, element) {
    arr.unshift(element);
    return arr;
}

/*  PUSH FUNCTION                              */

function addElementToEndOfArray(arr, element) {

    let newArr = arr.map(function (currentValue) {
        return currentValue;
    });

    newArr.push(element);

    return newArr;
}

/*DESTRUCTIVE ADD ELEMENT AT END OF ARRAY              */


function destructivelyAddElementToEndOfArray(arr, element) {

    arr.push(element);
    return arr;
}

function accessElementInArray(array, index){

    let element = array[index];

    return element;
}

 function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
}

function removeElementFromBeginningOfArray(array){
    return array.slice(1, array.length);
}


function removeElementFromEndOfArray(array){
    return array.slice(0, array.length - 1);
}


 function destructivelyRemoveElementFromEndOfArray(array){
    array.pop();
    return array;
}
