//////////////CHAPTER 2

//Problem 1
var hash = "";
while (hash.length <= 7) {
  console.log(hash);
  hash += "#";
};

//Problem 2
function fizzBuzz(num){
  for (var i = 0; i <= num; i++) {
    result = !(i % 3) ? !(i % 5) ? "FizzBuzz" : "Fizz" : !(i % 5) ? "Buzz" : i;
    console.log(result);
  };
};


//Problem 3

var num = 8;
var result = "";

for(var x = 0; x < num; x++){
   for(var y = 0; y < num; y++) {
     result += (x + y) % 2 ? "#" : " ";
   }
   result += "\n";
}

console.log(result);

//////////////CHAPTER 3

//Problem 1
function min(a, b) {
   return a < b ? a : b;
}

//Problem 2

//solution 1
function isEven(n){
	if (n == 0) {
  	return true;
  } else if (n == 1) {
  	return (false);
  } else if (n < 1) {
  	return isEven(-n);
  } else {
   	return isEven(n - 2);
  }
};

//refactored solution
function isEven(n){
	if (n === 0 || n === 1) return n === 0;
  return isEven(n < 1 ? -n : n - 2);
};


//Problem 3
function countChar(str, char) {
var counter = 0;
for (var i = 0; i < str.length; i++)
   if (str.charAt(i) === char) {
     counter ++;
   }
console.log(counter);
}

///////////////CHAPTER 4

//Problem 1

var result = [];

function range(start, end, step) {
  if (step == undefined) {
    step = 1;
  }
  else if ((start > end) && (step < 0)) {
    for(var i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  else if ((start > end) && (step > 0)) {
    for(var i = start; i >= end; i -= step) {
      result.push(i);
    }
  }
  else if ((start < end) && (step < 0)) {
    for(var i = start; i <= end; i -= step) {
      result.push(i);
    }
  }
  else {
    for(var i = start; i <= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

function sum(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus);
}

console.log(sum(range(1, 10)));

//refactored solution

var result = [];

function range(start, end, step = 1) {
   step = start > end ? -Math.abs(step) : Math.abs(step);
   for (var i = start; start > end ? i >= end : i <= end; i += step) {
     result.push(i);
   }
   return result;
}

function sum(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus);
}


//Problem 2
var arr = [];

function reverseArray(array){
   for(var i = array.length - 1; i >= 0; i--) {
     arr.push(array[i]);
   }
   return arr;
}

function reverseArrayInPlace(array) {

   var left = null;
   var right = null;

   for (left = 0, right = array.length - 1; left < right; left += 1, right -=1) {

      var temporary = array[left];
      array[left] = array[right];
      array[right] = temporary;

   }

   return array;

}

//////////////CHAPTER 5

//Problems 1 + 2

var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";


var ancestry = JSON.parse(ANCESTRY_FILE);
var byName = {};
var century = {};

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

ancestry.forEach(function(person){
  if (!century[Math.ceil(person.died/100)]) century[Math.ceil(person.died/100)] = [];
  century[Math.ceil(person.died/100)].push(person.died - person.born);
})

for (item in century) {
  century[item] = average(century[item]);
}
console.log(century);

ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function ages(ancestry) {
  return ancestry.filter(function(person){
    return byName[person.mother];
  }).map(function(person){
    return person.born - byName[person.mother].born;
  });
}
console.log(average(ages(ancestry)));
