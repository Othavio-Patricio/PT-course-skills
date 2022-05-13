let oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

// const sorting = (evt) => {
//     for (let index = 0; index < evt.length; index += 1) {
//         for (let key = 0; key < evt.length - 1; key += 1) {
//             if (evt[key] > evt[key + 1]) {
//                 const a = evt[key];
//                 evt[key] = evt[key + 1];
//                 evt[key + 1] = a;
//             }
//         }
//     }
//     return(evt);
// }

// oddsAndEvens = sorting(oddsAndEvens);

console.log(oddsAndEvens.sort((a, b) => a - b)); // será necessário alterar essa linha