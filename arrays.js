var chocolateBars = new Array()

chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, b) {
  a.unshift(b)
  return a
}

function destructivelyAddElementToBeginningOfArray(c, d) {
  c[0] = d
  return c
}

function addElementToEndOfArray(e, f) {
  e.push(f)
  return e
}

function destructivelyAddElementToEndOfArray(g, h) {
  g[g.length - 1] = h
  return g
}

function accessElementInArray(i, j) {
  console.log(i[j])
}

function destructivelyRemoveElementFromBeginningOfArray(k) {
  k.shift()
  return k
}

function removeElementFromBeginningOfArray(l) {
  l.slice(1)
  return l
}

function destructivelyRemoveElementFromEndOfArray(m) {
  m.pop()
  return m
}

function removeElementFromEndOfArray(n) {
  n = n.slice(-1)
  return n
}

accessElementInArray (chocolateBars, 1)
