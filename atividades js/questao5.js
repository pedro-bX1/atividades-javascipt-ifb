/*5. Usando forEach, escreva um código que percorre um array de strings e escreve cada um dos elementos na tela, assim como o número de caracteres que ele contém.

Por exemplo, para o array ['Java', 'Javascript', 'CSS', 'C#'], a saída pode ser algo como:

Java: 4 caracteres
Javascript: 10 caracteres
CSS: 3 caracteres
C#: 2 caracteres
*/
let list = ['Java', 'Javascript', 'CSS', 'C#'];

list.forEach(function(x){console.log(`${x}: ${x.length} caracteres`)});