function fazAlgo(oque, x){
    return oque(x);
}

function dobra(x){
    return x*2 
}

function quadrado(x){
    return Math.pow(x,2)
}

for(let n of [2,3,4,5]){
    console.log(`${n}: ${fazAlgo(dobra, n)}, ${fazAlgo(quadrado, n)}`);    
}