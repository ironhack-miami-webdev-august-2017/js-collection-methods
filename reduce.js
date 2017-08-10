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
  'dinosaur',
];

var lengths = listOfAnimals.map(function(oneAnimal) {
  return oneAnimal.length;
});

console.log(lengths);

// REDUCE
// ------
// Calculate new value from combining the items of an array.
// 1. RESULTS IN ONE VALUE
// 2. ARRAY ITEM IS THE 2ND PARAMETER
// 3. OPTIONAL START VALUE

console.log('reduce versions');
var totalLengths = lengths.reduce(function (previousResult, oneLength) {
  return previousResult + oneLength;
}, 0);
// |
// Starting value ("previousResult" of the 1st round)

console.log(totalLengths);
console.log(totalLengths / listOfAnimals.length);


var adMessage = listOfAnimals.reduce(function (previousResult, oneAnimal) {
  return previousResult + ' a ' + oneAnimal + ',';
}, 'OPEN TODAY! New zoo with');
// --------------------------
//        |
// Starting value ("previousResult" of the 1st round)

adMessage += ' and Dwayne Johnson (The Rock).';

console.log( adMessage );


console.log('-----------------');
console.log('forEach versions');

var totalLengths = 0;

lengths.forEach(function(oneLength) {
  totalLengths += oneLength;
});

console.log(totalLengths);
console.log(totalLengths / listOfAnimals.length);


var adMessage = 'OPEN TODAY! New zoo with';

listOfAnimals.forEach(function (oneAnimal) {
  adMessage += ' a ' + oneAnimal + ',';
});

adMessage += ' and Dwayne Johnson (The Rock).';

console.log( adMessage );
