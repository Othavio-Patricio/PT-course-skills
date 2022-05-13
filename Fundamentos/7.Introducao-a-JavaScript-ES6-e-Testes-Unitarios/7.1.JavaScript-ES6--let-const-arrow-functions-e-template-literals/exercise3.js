// parte 1
const fatorial = (evt) => {
  if (evt >= 0) {
    let a = 1;
    if (evt > 0) {
      for (let index = 1; index <= evt; index += 1) {
        a *= index;
      }
    }
    return a;
  } else {
    return ('error')
  }
}

const fatorial2 = (evt) => evt > 1 ? evt * fatorial2(evt - 1) : 1;

console.log(fatorial(5), fatorial2(5));

// parte 2
const longestWord = (string) => {
  const myArray = string.split(" ");
  let a = '';
  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index].length > a.length) {
      a = myArray[index];
    }
  }
  return a;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//parte 3
const changeX = (string) => {
  const myArray = string.split("");
  const parameter = 'Othavio';
  let newString = '';
  for (let key in myArray) {
    if (myArray[key] === 'x') {
      myArray[key] = parameter;
    }
    newString = `${newString}${myArray[key]}`;
  }
  return newString;
}

const skills = ['HTML', 'CSS', 'JS', 'REACT', 'PHYTON'];

const fullString = (string) => {
  string = `${string}
Minhas cinco principais habilidades são:
    ${skills[0]};
    ${skills[1]};
    ${skills[2]};
    ${skills[3]};
    ${skills[4]};
#goTrybe`;

  return string;
}

console.log(fullString(changeX('Tryber x aqui!')));