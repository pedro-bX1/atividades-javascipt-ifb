/*
2. Modifique o código abaixo para que todas as declarações de variáveis tenham tipos explícitos, assim como o parâmetro da função escreveSabor:

let sabor;
sabor = 'chocolate';

function escreveSabor(sab){
    console.log(`Pizza sabor ${sab}`);
}

let registrado;
console.log(`${registrado ? 'Usuário registrado' : 'Usuário não registrado'}`);
*/
var sabor = 'chocolate';
function escreveSabor(sab) {
    console.log("Pizza sabor " + sab);
}
escreveSabor(sabor);
var registrado;
console.log("" + (registrado ? 'Usuário registrado' : 'Usuário não registrado'));
