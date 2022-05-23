/*6. Replique a mesma saída do exercício 3 usando map no lugar da função fazEmTodos.
*/
function dobra(x){
    return x*2 
}

function quadrado(x){
    return Math.pow(x,2)
}

let lista = [2,3,4,5];
let q = lista.map( x => quadrado(x));
let d = lista.map( x => dobra(x)); 
console.log(q);
console.log(d);
