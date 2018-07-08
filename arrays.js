var chocolateBars=
[
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  function addElementToBeginningOfArray (chocolateBars,y)
  {
    chocolateBarsY=[y,...chocolateBars]
    return chocolateBarsY
  }
  function destructivelyAddElementToBeginningOfArray(chocolateBars, y)
  {
    chocolateBars.unshift(y);
    return destructivelyAddElementToBeginningOfArray
  }
  function addElementToEndOfArray (chocolateBars, y)
  {
    chocolateBarsY=[chocolateBarsY,...y]
    return chocolateBarsY
  }
  function destructivelyAddElementToEndOfArray (chocolateBars, y)
  {
    chocolateBars.push(y)
    return chocolateBars
  }
  function accessElementInArray (chocolateBars, index)
  {
    return chocolateBars[index]
  }
function destructivelyRemoveElementFromBeginningOfArray (chocolateBars)
{
  chocolateBars.shift()
  return chocolateBars
}