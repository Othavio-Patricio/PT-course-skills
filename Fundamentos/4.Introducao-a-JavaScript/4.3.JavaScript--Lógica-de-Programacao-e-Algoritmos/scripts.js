//exercise 1
console.log('exercise 1')
let number = 10, count = 1;

for (let index = 1; index <= number; index += 1) {
    count = index * count;
}
console.log(count);

//exercise 2
console.log('exercise 2')
let word = 'tryber', reverse = '';

for (let index = 0; index < word.length; index += 1) {
    reverse += word[word.length - 1 - index];
} 
console.log(reverse);

//exercise 3
console.log('exercise 3');
let array = ['java', 'javascript', 'python', 'html', 'css'], bigger = '', lower = array[0];

for (let index of array) {
    if (index.length > bigger.length) {
        bigger = index;
    }
    if (index.length < lower.length) {
        lower = index;
    }
}
console.log(bigger, lower);

//exercise 4
console.log('exercise 4');
let prime;

for (let index = 2; index <= 50; index += 1) {
    let counter = 0;
    for (let index2 = 1; index2 <= index; index2 += 1){
        if (index % index2 == 0) {
            counter += 1;
        }
    }
    if (counter <= 2) {
        prime = index;
    }
}
console.log(prime);

//bonus 1
console.log('bonus 1');
let asterisk = '', n = 5;

for (let index = 0; index < n; index += 1) {
    asterisk += '*';
}
for (let index = 0; index < n; index += 1) {
    console.log(asterisk);
}

//bonus 2
console.log('bonus 2');
let asterisk2 = '';

for (let index = 0; index < n; index += 1) {
    asterisk2 += '*';
    console.log(asterisk2);
}

//bonus 3
console.log('bonus 3');
let asterisk3 = '', count2 = 1, count3 = n-1;

for (let index = 0; index < n; index += 1) {
    for (let index2 = count2; index2 <= n; index2 += 1) {
        asterisk3 += ' ';
    }
    count2 += 1;
    for (let index3 = count3; index3 < n; index3 += 1) {
        asterisk3 += '*';
    }
    count3 -= 1;
    console.log(asterisk3);
    asterisk3 = '';
}

//bonus 4
console.log('bonus 4');
asterisk3 = '', count2 = 1, count3 = n;

for (let index = 0; index < n/2; index += 1) {
    for (let index2 = count2; index2 <= n/2; index2 += 1) {
        asterisk3 += ' ';
    }
    asterisk3 += '*';
    count2 += 1;
    for (let index3 = count3; index3 < n; index3 += 1) {
        asterisk3 += '**';
    }
    count3 -= 1;
    console.log(asterisk3);
    asterisk3 = '';
}