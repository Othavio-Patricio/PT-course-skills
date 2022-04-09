let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercise 1
for (let number of numbers) {
    console.log(number);
}

//exercise 2
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(sum);

//exercise 3
let average = sum / numbers.length;
console.log(average);

//exercise 4
if (average > 20) {
    console.log('value bigger than 20');
}
else {
    console.log('value lower than 20');
}

//exercise 5
let bigger = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > bigger) {
        bigger = numbers[index];
    }
}
console.log(bigger);
