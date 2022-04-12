let person = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};

console.log ('A jogadora '+ person.name + ' ' + person.lastName + ' tem ' + person.age + ' anos de idade');

person.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora '+ person.name + ' ' + person.lastName + ' foi eleita a melhor do mundo por ' + person.bestInTheWorld.length + ' vezes');

console.log('A jogadora possui ' + person.medals.golden + ' medalhas de ouro e ' + person.medals.silver + ' medalhas de prata');