/*
5. Transforme a interface anônima usada como tipo no método abaixo em uma interface explícita chamada Item, tendo modelo como atributo opcional. Aplique o tipo explícito no objeto sapato.

function adicionaAoCarrinho(item: {id: number, nome: string, modelo: number}) {
    console.log(`Adicionando ${item.nome} (id ${item.id}) ao carrinho`);
}

let sapato = {id: 1, nome: 'Sapatos de couro'}
adicionaAoCarrinho(sapato);
*/
function adicionaAoCarrinho(item) {
    console.log("Adicionando " + item.nome + " (id " + item.id + ") ao carrinho");
}
var sapato = {
    id: 1,
    nome: 'Sapatos de couro'
};
adicionaAoCarrinho(sapato);
