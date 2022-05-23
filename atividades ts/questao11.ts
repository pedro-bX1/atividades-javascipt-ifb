/*
11. Partindo do exercício anterior, crie um array com tipagem explícita mais estrita possível que contenha os objetos 
rex e lilo (ou equivalentes). Reproduza a mesma saída anterior através de um loop que percorra essa array.
*/

abstract class Pet{
    public abstract tipoDeAlimento() : string;
    public abstract fazBarulho() : string;

    public descricao() {
    return `${this.fazBarulho} ${this.tipoDeAlimento}`
         }
    
}    
class Cachorro extends Pet{
    public tipoDeAlimento() : string{
        return "Comendo ração de cachorro: "
    }
    public fazBarulho() : string{
        return "Au"
    }
    
} 
class Gato extends Pet{
    public tipoDeAlimento() : string{
        return "Comendo ração de gato: "
    }
    public fazBarulho() : string{
        return "miau"
    }
}
let rex = new Cachorro;
console.log( rex.descricao() );

let lilo = new Gato;
console.log( lilo.descricao() );

let animal: (Cachorro|Gato)[] = [rex, lilo]

for (let iterator of animal) {
    console.log(iterator);
    
}