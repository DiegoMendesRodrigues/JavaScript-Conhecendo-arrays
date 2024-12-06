/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Adicionar elementos, dentre outras funções
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nArray - Adicionar elementos, dentre outras funções",
    "\n" + "-".repeat(35))

// Função que calcula a média das notas
const calcularMedia = notas => (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

/**
 * Array com as 3 primeiras notas
 * O Array pode ser colocado em uma variáveis const, pois ela
 * continua sendo um Array, mesmo depois de alterarmos os 
 * valores dentro dele
 */
const notas = [9.3, 4.6, 7.5]

/**
 * Adicionar uma nota no final do array
 * push() é um método do objeto Array
 */
notas.push(6.7)

console.log(calcularMedia(notas).toFixed(2))
console.log('-')

// Índices do Array
const frutas = ['Maçã', 'Pera', 'Banana']
console.log(frutas)
console.log(Object.keys(frutas))

frutas[5] = 'Abacaxi'
console.log(frutas)
console.log(Object.keys(frutas))
console.log(frutas[5])
console.log(frutas[4])
console.log(frutas[2])
console.log('-')

// Criar um array com elementos vazios
const alunos = Array(5)
console.log(alunos)
console.log(Object.keys(alunos))
console.log('-')

// Array vazio
const arrayVazia = []
console.log(arrayVazia)
console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log('-')

const arrayComPosicoesVazias = [, , , ,]
console.log(arrayComPosicoesVazias)
console.log(arrayComPosicoesVazias.length)
console.log(arrayComPosicoesVazias[0])
console.log(arrayComPosicoesVazias[1])
arrayComPosicoesVazias.push(69)
console.log(arrayComPosicoesVazias)
console.log(arrayComPosicoesVazias[4])
console.log('-')