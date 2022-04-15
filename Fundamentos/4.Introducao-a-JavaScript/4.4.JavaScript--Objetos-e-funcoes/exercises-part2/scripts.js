//exercise 1
console.log('exercise 1');

function palindromeVerify(string) {
    string = string.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "");
    arrayNormal = string.split('');
    arrayReverse = string.split('');
    arrayReverse.reverse();

    for (let key in arrayNormal) {
        if (arrayNormal[key] === ' ' ||
        arrayNormal[key] === '-' ||
        arrayNormal[key] === '̃' ||
        arrayNormal[key] === '̂' ||
        arrayNormal[key] === '́' ||
        arrayNormal[key] === '̀' ||
        arrayNormal[key] === '̈') {
            arrayNormal.splice(key, 1);
        }
        if (arrayReverse[key] === ' ' ||
        arrayReverse[key] === '-' ||
        arrayReverse[key] === '̃' ||
        arrayReverse[key] === '̂' ||
        arrayReverse[key] === '́' ||
        arrayReverse[key] === '̀' ||
        arrayReverse[key] === '̈') {
            arrayReverse.splice(key, 1);
        }
    }

    for (let key in arrayNormal) {
        if (arrayNormal[key] !== arrayReverse[key]){
        return false;
        }
    }
    return true;
}

console.log(palindromeVerify ('Socorram-me subi no ônibus em Marrocos.'));

//exercise 2
console.log('exercise 2');

function greaterValue(array) {
    let a = array[0];
    let b = 0;
    for (let key in array) {
        if (array[key] > a) {
            a = array[key];
            b = key;
        }
    }
    return b;
}

let array1 = [2, 3, 6, 7, 10, 1];
console.log(greaterValue(array1));

//exercise 3
console.log('exercise 3');

function minorValue(array) {
    let a = array[0];
    let b = 0;
    for (let key in array) {
        if (array[key] < a) {
            a = array[key];
            b = key;
        }
    }
    return b;
}

let array2 = [2, 4, 6, 7, 10, 0, -3];
console.log(minorValue(array2));

//exercise 4
console.log('exercise 4');

function greaterName(array) {
    let a = array[0].split('');
    let b = array[0];
    for (let key in array) {
        let arrays3 = array[key].split('');
        if (arrays3.length > a.length) {
            a = arrays3;
            b = array[key];
        }
    }
    return b;
}

let array3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(greaterName(array3));

//exercise 5
console.log('exercise 5');

function mostRepeater(array) {
    let counter = 0;
    let number = [];
    let arrayCount = 0;
    let count2 = 0;

    for (let key of array) {
        let count = 0
        for (let index of array) {
            if (index === key) {
                count += 1;
            }
        }
        if (count > counter) {
            counter = count;
            arrayCount = 0;
            number.splice(0);
            number[arrayCount] = key;
            arrayCount += 1;
        }
        if (count === counter) {
        for (let index of number){
            if (key === index) { 
                count2 += 1;
            }
        }
        if (count2 === 0) {
            number[arrayCount] = key;
            arrayCount += 1;
        }
    }
    count = 0;
    count2 = 0
    }
    return number;
}

let array4 =  [2, 3, 2, 5, 8, 2, 3, 1, 1, 1];
console.log(mostRepeater(array4));

//exercise 6
console.log('exercise 6');

function sum (number) {
    let a = 0;
    if (number <= 0) {
        return 'error';
    }
    else {
        for (let index = 1; index <= number; index += 1) {
            a += index;
        }
    }
    return a;
}

console.log(sum(10));

//exercise 7
console.log('exercise 7');

function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
    let result;
  
    for (let index = 0; index < inversoFimPalavra.length; index += 1) {
      if (inversoPalavra[index] !== inversoFimPalavra[index]) {
        result = false;
        break;
      } else {
        result = true;
      }
    }
    
    return result;
  }

let stringA = 'trybe';
let stringB = 'be';
console.log(final(stringA, stringB));