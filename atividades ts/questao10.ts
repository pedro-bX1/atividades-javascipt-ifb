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