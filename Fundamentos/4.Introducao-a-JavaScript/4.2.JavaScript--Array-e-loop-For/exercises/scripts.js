let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercise 1
console.log('exercise 1');
for (let number of numbers) {
    console.log(number);
}

//exercise 2
console.log('exercise 2');
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(sum);

//exercise 3
console.log('exercise 3');
let average = sum / numbers.length;
console.log(average);

//exercise 4
console.log('exercise 4');
if (average > 20) {
    console.log('value bigger than 20');
}
else {
    console.log('value lower than 20');
}

//exercise 5
console.log('exercise 5');
let bigger = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > bigger) {
        bigger = numbers[index];
    }
}
console.log(bigger);

//exercise 6
console.log('exercise 6');
let oddNumber = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        console.log(numbers[index]);
        oddNumber += 1;
    }
}

if (oddNumber == 0) {
    console.log('No odd number found')
}
else {
    console.log(oddNumber);
}

//exercise 7
console.log('exercise 7');
let lower = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < lower) {
        lower = numbers[index];
    }
}
console.log(lower);

//exercise 8
console.log('exercise 8');
let array = [];

for (let index = 0; index < 25; index += 1) {
    array.push(index + 1);
    console.log(array[index]);
}

//exercise 9
console.log('exercise 9');
for (let index = 0; index < 25; index += 1) {
    console.log(array[index] / 2);
}