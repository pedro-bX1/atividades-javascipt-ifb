/*
6. Crie uma interface chamada Filme com propriedades titulo e duracao, com os tipos apropriados. Crie um array de objetos do tipo Filme, e acrescente alguns objetos a ele. Ao menos um dos objetos 
acrescentados deve ter uma propriedade extra, que não está definida na interface (por exemplo, diretor).

Crie uma função que recebe um Filme como parâmetro e escreva seu título e duração.

No código principal, use um for .. of para exibir chamar essa função em todos os elementos do array.

(Use tipagem explícita em todas as declarações de variáveis e parâmetros)
*/

interface Filme{
    titulo : string,
    duracao : number
}

let valores: Filme[] = [ {titulo:'50 tons de Preto', duracao:222}];

let z = {titulo:'O iluminado', duracao:212, diretor: 'James Cameron'};
valores.push( z )

function recebeFilme(filme: Filme){
    console.log(filme.titulo);
    console.log(filme.duracao);
}

for (let filme of valores) {
    console.log(filme);
    
}