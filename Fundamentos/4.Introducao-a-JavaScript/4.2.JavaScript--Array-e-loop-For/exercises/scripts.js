let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercise 1
for(let number of numbers) {
    console.log(number);
}

//exercise 2
let count = 0;
for(let number of numbers) {
    count += number;
}
console.log(count);