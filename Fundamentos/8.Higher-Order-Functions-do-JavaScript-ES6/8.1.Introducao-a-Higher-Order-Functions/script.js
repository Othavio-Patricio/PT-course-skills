// Exercise 1

function emailGenerator (nomeCompleto) {
  let array = [];
  let email = '';
  array = nomeCompleto.toLowerCase().split(' ');
  for (let key = 0; key < array.length; key += 1) {
    email += array[key];
    if (key === (array.length - 1)) {
      email += '@trybe.com';
    } else {
      email += '_';
    }
  }
  return { nomeCompleto, email }
}

const newEmployees = (emailGenerator) => {
  const employees = {
    id1: emailGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: emailGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: emailGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log('Exercise 1', newEmployees(emailGenerator));

// Exercise 2

const apostado = 2;

const checkIfWin = (sorteado, aposta) => {
  return sorteado === aposta;
};

const sorteio = (aposta, checkIfWin) => {
  const sorteado = Math.floor(Math.random() * 5 + 1);
  return checkIfWin(sorteado, aposta);
};

console.log('Exercise 2', sorteio(apostado, checkIfWin));

// Exercise 3

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkGrade = (right, student) => {
  let respostasCorretas = 0;
  let pontuacao = 0;
  for (let index = 0; index < right.length; index += 1) {
    if (student[index] !== 'N.A') {
      if (right[index] === student[index]) {
        respostasCorretas += 1;
        pontuacao += 1;
      } else {
        pontuacao -= 0.5;
      }
    }
  }
  return { respostasCorretas, pontuacao }
}

const grades = (right, student, checkGrade) => {
  return checkGrade(right, student);
};

console.log('Exercise 3', grades(rightAnswers, studentAnswers, checkGrade));