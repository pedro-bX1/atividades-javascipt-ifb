/*
3. Modifique o código abaixo para que as quatro declarações de arrays tenham tipos explícitos que funcionem corretamente (utilize os tipos mais estritos possíveis):

const numeros = [1, 2, 3, 4, 5];
const animais = ['tamanduá', 'tatu', 'onça', 'paca'];
const misto = [1, 'um', 2, 'dois', 3, 'três'];
const matriz = [numeros, animais, misto];

console.log(matriz);
*/

const numeros : number[] = [1, 2, 3, 4, 5];
const animais : string[] = ['tamanduá', 'tatu', 'onça', 'paca'];
const misto : (number|string)[] = [1, 'um', 2, 'dois', 3, 'três'];
const matriz : (number|string)[][] = [numeros, animais, misto];

console.log(matriz);