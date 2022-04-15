function romanNumber(string) {
    let arrayRoman = string.toLowerCase().split('');

    for (let key in arrayRoman) {
        if (arrayRoman[key] === 'i') {
            arrayRoman[key] = 1;
            if (arrayRoman.length === 1) {
                return 1;
            }
        } else if (arrayRoman[key] === 'v') {
                arrayRoman[key] = 5;
                if (arrayRoman.length === 1) {
                    return 5;
                }
        } else if (arrayRoman[key] === 'x') {
            arrayRoman[key] = 10;
            if (arrayRoman.length === 1) {
                return 10;
            }
        } else if (arrayRoman[key] === 'l') {
            arrayRoman[key] = 50;
            if (arrayRoman.length === 1) {
                return 50;
            }
        } else if (arrayRoman[key] === 'c') {
            arrayRoman[key] = 100;
            if (arrayRoman.length === 1) {
                return 100;
            }
        } else if (arrayRoman[key] === 'd') {
            arrayRoman[key] = 500;
            if (arrayRoman.length === 1) {
                return 500;
            }
        } else if (arrayRoman[key] === 'm') {
            arrayRoman[key] = 1000;
            if (arrayRoman.length === 1) {
                return 1000;
            }
        } 
    }

    for (let key = 0; key < arrayRoman.length - 1; key += 1) {
        if (arrayRoman[key] < arrayRoman[key + 1]) {
            arrayRoman[key] = arrayRoman[key +1] - arrayRoman[key];
            arrayRoman.splice(key + 1, 1);
        }
    }
    for (let index = 0; index < arrayRoman.length + 2; index += 1) {
        for (let key = 0; key < arrayRoman.length - 1; key += 1) {
            arrayRoman[key] = arrayRoman[key +1] + arrayRoman[key];
            arrayRoman.splice(key + 1, 1);
        }
    }
    let a = arrayRoman[0];
    return a;
}

let string1 = 'xxi';
console.log(romanNumber(string1));