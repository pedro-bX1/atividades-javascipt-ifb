/*
9. Utilize sort para ordenar os elementos da lista das questões anteriores por idade.
*/
let lista = [ 
    {nome: 'Bruna', idade: 28},
    {nome: 'Lucas', idade: 22},
    {nome: 'Martim', idade: 24},
    {nome: 'Júlia', idade: 31},
];

let d= lista.sort((a,b) => a.idade - b.idade );
console.log(d);