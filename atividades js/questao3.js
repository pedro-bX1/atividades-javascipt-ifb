/*
3. Ainda aproveitando dobra e quadrado, escreva a função fazEmTodos(oque, array), de modo que a saída de:

let lista = [2,3,4,5];
console.log( fazEmTodos(dobra, lista) );
console.log( fazEmTodos(quadrado, lista) );

Seja a seguinte:

[ 4, 6, 8, 10 ]
[ 4, 9, 16, 25 ]
*/
function fazEmTodos(oque, array){
d = [];

for(let n in array){
  d[n] = oque(array[n]);
}
return d;
}


function dobra(x){
    return x*2 
}

function quadrado(x){
    return Math.pow(x,2)
}


let lista = [2,3,4,5];
console.log( fazEmTodos(dobra, lista) );
console.log( fazEmTodos(quadrado, lista) );
