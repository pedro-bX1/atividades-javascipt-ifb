/*
11. Partindo do exercício anterior, crie um array com tipagem explícita mais estrita possível que contenha os objetos
rex e lilo (ou equivalentes). Reproduza a mesma saída anterior através de um loop que percorra essa array.
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
var animal = [rex, lilo];
for (var _i = 0, animal_1 = animal; _i < animal_1.length; _i++) {
    var iterator = animal_1[_i];
    console.log(iterator);
}
