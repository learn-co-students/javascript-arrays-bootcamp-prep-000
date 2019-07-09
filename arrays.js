var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars)
{
	return ["foo", ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray (chocolateBars)
{
	chocolateBars.unshift("foo");
	return (chocolateBars);
}

function addElementToEndOfArray (chocolateBars)
{
	return [...chocolateBars, "foo"]
}

function destructivelyAddElementToEndOfArray (chocolateBars)
{
	chocolateBars.push("foo");
	return (chocolateBars);
}

var candy = ["spk", "gummy", "reeses"]

function accessElementInArray (candy)
{
	return candy[2];
}


function destructivelyRemoveElementFromBeginningOfArray (candy)
{
	candy.shift()
	return candy;
}

function removeElementFromBeginningOfArray (candy)
{

	return candy.slice(-2);
}

function destructivelyRemoveElementFromEndOfArray (candy)
{
candy.pop()
return candy;
}

function removeElementFromEndOfArray (candy)
{
	return candy.slice(0, candy.length -1)
}
