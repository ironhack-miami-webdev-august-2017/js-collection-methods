var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];


// FILTER
// ------
// Filter out some of the items of an array.
// 1. DIFFERENT LENGTH
// 2. MAKES A COPY (old array is unchanged)
// 3. SAME ITEMS AS BEFORE (just less of them)

console.log('filter versions');

var youngPeople = people.filter(function (onePerson) {
  return onePerson.age < 18;
});

var drinkers = people.filter(function (onePerson) {
  return onePerson.age >= 21;
});

console.log( people );
console.log( youngPeople );
console.log( drinkers );

console.log('-----------------');
console.log('forEach versions');

var youngPeople = [];

people.forEach(function (onePerson) {
  if (onePerson.age < 18) {
    youngPeople.push( onePerson );
  }
});

var drinkers = [];

people.forEach(function (onePerson) {
  if (onePerson.age >= 21) {
    drinkers.push( onePerson );
  }
});

console.log( people );
console.log( youngPeople );
console.log( drinkers );



console.log('-----------------');
console.log('Exercise Solution:');

var numbers = [22, 23, 99, 68, 1, 0, 9];

var filteredNumbers = numbers.filter(function (oneNum) {
  return oneNum % 2 === 0 && oneNum >= 42;
});

console.log(filteredNumbers);
