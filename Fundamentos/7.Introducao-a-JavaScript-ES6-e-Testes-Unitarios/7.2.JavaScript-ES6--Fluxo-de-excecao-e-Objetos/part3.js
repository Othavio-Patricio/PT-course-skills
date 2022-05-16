const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const newProperty = (object, key, value) => { object[key] = value }

const listingKeys = (object) => { console.log(Object.keys(object)) }

const objectLength = (object) => { console.log(Object.keys(object).length) }

const listingValues = (object) => { console.log(Object.values(object)) }

newProperty(lesson2, 'turno', 'noite');

listingKeys(lesson2);

objectLength(lesson2);

listingValues(lesson2);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

let amountOfStudants = 0;

for (let key in Object.keys(allLessons)) {
  amountOfStudants += allLessons[Object.keys(allLessons)[key]].numeroEstudantes;
}
console.log(amountOfStudants);

const keyByPosition = (object, number) => object[Object.keys(object)[number]];

console.log(keyByPosition(lesson1, 1));

const verifyPair = (object, key, value) => {
  const boolean = object[key] === value ? true : false;
  return boolean
}

console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));