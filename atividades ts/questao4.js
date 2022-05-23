/*
4. Crie um tipo enum chamado Veiculo com opções como Carro, Onibus, Bicicleta, etc...
Crie uma função com a assinatura function descreveVeiculo(v: Veiculo), a qual escreva uma frase diferente na tela dependendo do tipo de veículo passado.
Teste a função escrevendo chamadas com valores diferentes.
*/
var Veiculo;
(function (Veiculo) {
    Veiculo[Veiculo["Carro"] = 0] = "Carro";
    Veiculo[Veiculo["Onibus"] = 1] = "Onibus";
    Veiculo[Veiculo["Bicicleta"] = 2] = "Bicicleta";
    Veiculo[Veiculo["Trem"] = 3] = "Trem";
})(Veiculo || (Veiculo = {}));
var sit1 = Veiculo.Carro;
var sit2 = Veiculo.Onibus;
var sit3 = Veiculo.Bicicleta;
var sit4 = Veiculo.Trem;
function descreveVeiculo(v) {
    if (v == Veiculo.Carro) {
        console.log("O carro é um veículo de 4 rodas");
    }
    else if (v == Veiculo.Onibus) {
        console.log("O Onibus é um veículo de 4 rodas");
    }
    else if (v == Veiculo.Bicicleta) {
        console.log("A bicicleta é um veículo de 2 rodas");
    }
    else {
        console.log("O trem é um veículo de várias rodas");
    }
}
descreveVeiculo(sit1);
descreveVeiculo(sit2);
descreveVeiculo(sit3);
descreveVeiculo(sit4);
