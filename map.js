var listOfAnimals = [
  'giraffe',
  'aardvark',
  'vulture',
  'panda',
  'narwhal',
  'jellyfish',
  'gecko',
  'cat',
  'dog',
  'ant',
  'dinosaur'
];


// MAP
// ----
// Make a new array that's based off of the old array.
// 1. SAME LENGTH
// 2. MAKES A COPY (old array is unchanged)

console.log('map versions');

var listOfLengths = listOfAnimals.map(function (oneAnimal) {
  return oneAnimal.length;
});

var uppercased = listOfAnimals.map(function (oneAnimal) {
  return oneAnimal.toUpperCase();
});

console.log( listOfAnimals );
console.log( listOfLengths );
console.log( uppercased );

console.log('-----------------');
console.log('forEach versions');

var listOfLengths = [];

listOfAnimals.forEach(function (oneAnimal) {
  listOfLengths.push( oneAnimal.length );
});

var uppercased = [];

listOfAnimals.forEach(function (oneAnimal) {
  uppercased.push( oneAnimal.toUpperCase() );
});

console.log( listOfAnimals );
console.log( listOfLengths );
console.log( uppercased );
