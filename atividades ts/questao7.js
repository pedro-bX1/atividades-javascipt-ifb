/*
Dado o seguinte código:
interface Cidade { nome: string; } // não alterar essa linha
let brasilia = {
    coords: {
        latitude: -15.7608947,
        longitude: -47.8924659,
    },
    nome: 'Brasília',
};

let goiania = {
    coords: {
        latitude: '-16.6869871',
        longitude: '-49.2648432',
    },
    nome: 'Goiânia',
};

function obterInformacoes(cidade: Cidade) {
    const coords = `(${cidade.coords.latitude.toFixed(3)}, ${cidade.coords.longitude.toFixed(3)})`;
    return `${cidade.nome.toUpperCase()} está localizada em ${coords}.`;
}
console.log( obterInformacoes(brasilia) );
console.log( obterInformacoes(goiania) );
Sem modificar a primeira linha, estenda a interface Cidade de modo a incluir a propriedade coords,
com o tipo apropriado. Corrija a definição da variável goiania, de modo a tornar o código compatível com esse tipo.
*/
var brasilia = {
    coords: {
        latitude: -15.7608947,
        longitude: -47.8924659
    },
    nome: 'Brasília'
};
var goiania = {
    coords: {
        latitude: -16.6869871,
        longitude: -49.2648432
    },
    nome: 'Goiânia'
};
function obterInformacoes(cidade) {
    var coords = "(" + cidade.coords.latitude.toFixed(3) + ", " + cidade.coords.longitude.toFixed(3) + ")";
    return cidade.nome.toUpperCase() + " est\u00E1 localizada em " + coords + ".";
}
console.log(obterInformacoes(brasilia));
console.log(obterInformacoes(goiania));
