let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercise 1
for(let number of numbers) {
    console.log(number);
}

//exercise 2
let sum = 0;
for(let number of numbers) {
    sum += number;
}
console.log(sum);

//exercise 3
let average = sum / numbers.length;
console.log(average);
