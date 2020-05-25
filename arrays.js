var chocolateBars=["snickers", "hundred grand", "kitktat", "skittles"];
function addElementToBeginningOfArray(a, b){
  
  var newa=[b, ...a];
  return newa;
  }
  function destructivelyAddElementToBeginningOfArray(c, d){c.unshift(d);
  return c;
    }
    function addElementToEndOfArray(e,f){
      var newe=[...e,f];
      return newe;
      }
      function destructivelyAddElementToEndOfArray(g,h){
        g.push(h);
        return g;
      } 
      function accessElementInArray(i, j){
        return i[j];
      }
      function destructivelyRemoveElementFromBeginningOfArray(k){
        k.shift();
        return k;
      }
      function removeElementFromBeginningOfArray(l){
        l=l.slice(1);
        return l;
      }
      function destructivelyRemoveElementFromEndOfArray(m){
        m.pop();
        return m;
      }
      function destructivelyRemoveElementFromEndOfArray(n){
       n.pop();
        return n;
      }
      function removeElementFromEndOfArray(o){
        o=o.slice(0, o.length-1);
        return o;
      }

      