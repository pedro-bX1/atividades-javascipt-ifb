/*
10. Crie uma classe abstrata chamada Pet com os seguintes métodos abstratos:

public abstract tipoDeAlimento() : string;
public abstract fazBarulho() : string;
Crie duas subclasses concretas para essa classe (por exemplo, Cachorro, Gato), sobrescrevendo os métodos como apropriado.
Teste as chamadas desses métodos.

Depois, adicione a Pet o método (concreto) public descricao() : string que retorne um texto formada a partir dos
métodos anteriores. Não adicione esse novo método às subclasses.

Ao final, o seguinte código:

let rex = new Cachorro;
console.log( rex.descricao() );

let lilo = new Gato;
console.log( lilo.descricao() );

Deve produzir algo parecido com:

Comendo ração de cachorro: Au!
Comendo ração de gato: Miau!
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pet = /** @class */ (function () {
    function Pet() {
    }
    Pet.prototype.descricao = function () {
        return this.fazBarulho + " " + this.tipoDeAlimento;
    };
    return Pet;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.tipoDeAlimento = function () {
        return "Comendo ração de cachorro: ";
    };
    Cachorro.prototype.fazBarulho = function () {
        return "Au";
    };
    return Cachorro;
}(Pet));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.tipoDeAlimento = function () {
        return "Comendo ração de gato: ";
    };
    Gato.prototype.fazBarulho = function () {
        return "miau";
    };
    return Gato;
}(Pet));
var rex = new Cachorro;
console.log(rex.descricao());
var lilo = new Gato;
console.log(lilo.descricao());
