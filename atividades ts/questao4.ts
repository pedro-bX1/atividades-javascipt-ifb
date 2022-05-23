/*
4. Crie um tipo enum chamado Veiculo com opções como Carro, Onibus, Bicicleta, etc...
Crie uma função com a assinatura function descreveVeiculo(v: Veiculo), a qual escreva uma frase diferente na tela dependendo do tipo de veículo passado. 
Teste a função escrevendo chamadas com valores diferentes.
*/

enum Veiculo {
    Carro, Onibus, Bicicleta, Trem
}

let sit1 : Veiculo = Veiculo.Carro;
let sit2 = Veiculo.Onibus;
let sit3 = Veiculo.Bicicleta;
let sit4 = Veiculo.Trem;


function descreveVeiculo(v: Veiculo){
    if(v==Veiculo.Carro){
        console.log("O carro é um veículo de 4 rodas");       
    }else if(v==Veiculo.Onibus){
        console.log("O Onibus é um veículo de 4 rodas");
    }else if(v==Veiculo.Bicicleta){
        console.log("A bicicleta é um veículo de 2 rodas");
    }else{
        console.log("O trem é um veículo de várias rodas");
    }
}
descreveVeiculo(sit1)
descreveVeiculo(sit2)
descreveVeiculo(sit3)
descreveVeiculo(sit4)