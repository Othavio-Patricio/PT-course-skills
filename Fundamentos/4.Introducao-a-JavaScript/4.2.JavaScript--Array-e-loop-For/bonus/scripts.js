let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// //bonus 1
// console.log('bonus 1');

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let index2 = 0; index2 < index; index2 += 1) {
//         if (numbers[index] < numbers[index2]) {
//             let position = numbers[index];
//             numbers[index] = numbers[index2];
//             numbers[index2] = position;
//         }
//     }
// }
// console.log(numbers);

// //bonus 2
// console.log('bonus 2');

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let index2 = 0; index2 < index; index2 += 1) {
//         if (numbers[index] > numbers[index2]) {
//             let position = numbers[index];
//             numbers[index] = numbers[index2];
//             numbers[index2] = position;
//         }
//     }
// }
// console.log(numbers);

//bonus 3
console.log('bonus 3');

let array = [];
for (let index = 0; index < numbers.length; index += 1) {
    if (index <= numbers.length -2) {
        array.push (numbers[index] * numbers[index + 1]);
    }
    else {
        array.push (numbers[index] * 2);
    }
}
console.log(array);