var listOfAnimals = [
  'giraffe',
  'aardvark',
  'Vulture',
  'panda',
  'narwhal',
  'jellyfish',
  'gecko',
  'cat',
  'dog',
  'ant',
  'dinosaur'
];

listOfAnimals.sort(function (a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  // if order is okay, return negative number
  if (a < b) {
    return -1;
  }

  // if order needs to switch, return a positive number
  if (a > b) {
    return 1;
  }

  // if they are the same, return 0
  return 0;
});

console.log( listOfAnimals );


var numbers = [22, 23, 99, 68, 1, 0, 9];

numbers.sort(function (a, b) {
  // the subtraction shortcut is only for numbers
  // return a - b;

  // if order is okay, return negative number
  if (a < b) {
    return -1;
  }

  // if order needs to switch, return a positive number
  if (a > b) {
    return 1;
  }

  // if they are the same, return 0
  return 0;
});

console.log( numbers );


var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

people.sort(function (a, b) {
  // the subtraction shortcut is only for numbers
  return a.age - b.age;
});

console.log( people );

people.sort(function (a, b) {
  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();

  // if order is okay, return negative number
  if (nameA < nameB) {
    return -1;
  }

  // if order needs to switch, return a positive number
  if (nameA > nameB) {
    return 1;
  }

  // if they are the same, return 0
  return 0;
});

console.log( people );
