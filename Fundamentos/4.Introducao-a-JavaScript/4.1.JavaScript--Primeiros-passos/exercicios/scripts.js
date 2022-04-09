//exercise 1

let a = 10, b = 5, c;
c = a + b;
console.log(c);

c = a - b;
console.log(c);

c = a * b;
console.log(c);

c = a / b;
console.log(c);

c = a % b;
console.log(c);

//exercise 2

if (a > b) {
    console.log(a);
}
else if (a==b) {
    console.log("São iguais");
}
else {
    console.log(b);
}

//exercise 3

if (a > b && a > c) {
    console.log(a);
}
else if (b > a && b > c) {
    console.log(b);
}
else {
    console.log(c);
}


//exercise 4

const d = -3;

if (d > 0) {
    console.log("positive");
}
else if (d < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

 //exercise 5

 const alfa = 90, beta = 90, teta = 0;

 if (alfa <= 0 || beta <= 0 || teta <= 0 || alfa + beta + teta > 180) {
     console.log("false")
 }

else {
    console.log("true")
}

//exercise 6

const chess = "rOOk";

switch (chess.toLowerCase()) {
    case "bishop":
        console.log("Diagonals");
        break;

    case "queen":
        console.log("Diagonals and straight lines");
        break;

    case "rook":
        console.log("Straight lines");
        break;

    case "knight":
        console.log("like an L, 2 steps foward and 1 to the side");
        break;

    case "pawn":
        console.log("straight lines but only one step and takes other pieces in one step in diagonals");
        break;

    case "king":
        console.log("Diagonals and straight lines but only one step");
        break;

    default:
        console.log("error");
}

//exercise 7

const porcentagem = 66;

if (porcentagem >= 90 && porcentagem <= 100) {
    console.log("A");
}
else if (porcentagem >= 80 && porcentagem < 90) {
    console.log("B");
}
else if (porcentagem >= 70 && porcentagem < 80) {
    console.log("C");
}
else if (porcentagem >= 60 && porcentagem < 70) {
    console.log("D");
}
else if (porcentagem >= 50 && porcentagem < 60) {
    console.log("E");
}
else if (porcentagem < 50 && porcentagem >= 0) {
    console.log("F");
}
else {
    console.log("error");
}

//exercise 8
const x = 10, y = 2, z = 8;

if (x % 2 == 0 || y % 2 == 0 || z % 2 == 0) {
    console.log("true")
}
else {
    console.log("false")
}

//exercise 9

if (x % 2 != 0 || y % 2 != 0 || z % 2 != 0) {
    console.log("true")
}
else {
    console.log("false")
}

//exercise 10

const custo = 10, venda = 20, custoTotal = custo + (custo/5);

if(custo < 0 || venda < 0 || custoTotal < 0) {
    console.log("error")
}
else {
    console.log("O lucro será: "+1000*(venda - custoTotal))
}

//exercise 11

const salarioBruto = 7000;
let salarioLiquido, salarioBase, descontoINSS;

if (salarioBruto >=0 && salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (salarioBruto*8)/100;
}
else if (salarioBruto > 1556.94  && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (salarioBruto*9)/100;
}
else if (salarioBruto > 2594.92  && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto*11)/100;
}
else if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - 570.88;
}
else {
    console.log("error");
}

if (salarioBase >= 0 && salarioBase <= 1903.98) {
    descontoINSS = 0;
}
else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    descontoINSS = (salarioBase*7.5)/100 -142.80;
}
else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    descontoINSS = (salarioBase*15)/100 -354.80;
}
else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    descontoINSS = (salarioBase*22.5)/100 -636.13;
}
else if (salarioBase > 4664.68) {
    descontoINSS = (salarioBase*27.5)/100 -869.36;
}
else {
    console.log("error");
}

salarioLiquido = salarioBase - descontoINSS;

console.log(salarioLiquido);