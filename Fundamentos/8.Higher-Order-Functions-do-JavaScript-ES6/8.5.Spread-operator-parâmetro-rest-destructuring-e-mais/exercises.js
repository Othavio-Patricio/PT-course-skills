// exercise 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log('exercise 1', rectangleArea(...rectangle)); // altere a chamada da funcao rectangleArea
});

// exercise 2
const sum = (...args) => args.reduce((acc, curr) => acc + curr);
console.log('exercise 2', sum(4, 7, 8, 9, 60))

// exercise 3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = (object) => {
  const { name, age, likes } = object;
  return `${name} is ${age} years old and likes ${likes.join(', ')}.`;
}

console.log('exercise 3')
console.log(personLikes(alex));
console.log(personLikes(gunnar));

// exercise 4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (arrayOfObjects) => {
  return arrayOfObjects.filter(
  ({ nationality, bornIn }) => nationality === 'Australian' 
  && bornIn < 2000 && bornIn >= 1900);
};
console.log('exercise 4', filterPeople(people));

// exercise 5
const myList = [1, 2, 3];

const swap = ([first, second, third]) => [third, second, first];
console.log('exercise 5', swap(myList));

// exercise 6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([type, brand, year]) => { return { type, brand, year, } };
console.log('exercise 6', toObject(palio));

// exercise 7
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;

console.log('exercise 7', shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log('exercise 7', shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log('exercise 7', shipLength(ships[2])); // 'Yamato is 256 meters long'

// exercise 8
const greet = (name = 'User', greeting = 'Hi') => `${greeting} ${name}`

console.log('exercise 8', greet('John')) // 'Hi John'
console.log('exercise 8', greet('John', 'Good morning')) // 'Good morning John'
console.log('exercise 8', greet('Isabela', 'Oi')) // 'Oi Isabela'

// exercise 9
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const months = ({ spring, summer, autumn, winter }) => [... winter, ...spring, ...summer, ...autumn];

console.log('exercise 9', months(yearSeasons));