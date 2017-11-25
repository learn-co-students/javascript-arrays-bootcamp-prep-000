var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, par){
	var newarr = [par, ...arr]
	return newarr
}

function destructivelyAddElementToBeginningOfArray(arr, par){
	arr.unshift(par)
	return arr
}

function addElementToEndOfArray(arr, par){
	var newarr = [...arr, par]
	return newarr
}

function destructivelyAddElementToEndOfArray(arr, par){
	arr.push(par)
	return arr
}

function accessElementInArray(arr, i){
	return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
	arr.shift()
	return arr
}

function removeElementFromBeginningOfArray(arr) {
	var newarr = arr.slice(1)
	return newarr
}

function destructivelyRemoveElementFromEndOfArray(arr){
	arr.pop()
	return arr
}

function removeElementFromEndOfArray(arr){
	var newarr = arr.slice(0, arr.length - 1)
	return newarr
}
