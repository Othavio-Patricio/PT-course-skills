//exercise 1
console.log('exercise 1');

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda, " + info.personagem);

//exercise 2
console.log('exercise 2');

info.recorrente = ('Sim');

console.log(info.recorrente);

//exercise 3
console.log('exercise 3');

for (let key in info) {
    console.log(key);
}

//exercise 4
console.log('exercise 4');

for (let key in info) {
    console.log(info[key]);
}

//exercise 5
console.log('exercise 5');

let patinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let key in info) {
    if (key === 'recorrente' &&
    info[key] === 'Sim' &&
    patinhas[key] === 'Sim') {
        console.log('Ambos recorrentes');
    }
    else {
        console.log(info[key] + ' e ' + patinhas[key]);
    }
}

//exercise 6
console.log('exercise 6');

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'");

//exercise 7
console.log('exercise 7');

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
});
 console.log(leitor.livrosFavoritos[1]);

 //exercise 8
console.log('exercise 8');

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');