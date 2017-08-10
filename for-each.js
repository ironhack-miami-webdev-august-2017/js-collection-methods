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


for (var i = 0; i < listOfAnimals.length; i += 1) {
  console.log( listOfAnimals[i].toUpperCase() );
}

console.log('---------------------------');

listOfAnimals.forEach(function (oneAnimal) {
  console.log( oneAnimal.toUpperCase() );
});
