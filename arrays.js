var chocolateBars=['snickers','hundred grand','kitkat','skittles']
chocolateBars.push('crackles')
console.log(chocolateBars)



function addElementToBeginningOfArray(chocolateBars,element)
{
    
  chocolateBars.unshift(element)
  return chocolateBars
  
}

function  destructivelyAddElementToBeginningOfArray(chocolateBars,element)
{
  var test =[]
return test.push(addElementToBeginningOfArray(chocolateBars,element))
}

