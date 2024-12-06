/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Calcular a média com for...of
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
 * @public
 * @author Diego Mendes Rodrigues
 */
/**
 * O loop for...of percorre objetos iterativos (incluindo Array, 
 * Map, Set, o objeto arguments e assim por diante), chamando uma 
 * função personalizada com instruções a serem executadas para 
 * o valor de cada objeto distinto.
 * 
 * for (variavel of iteravel) {
 *   declaração
 * }
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nArray - Calcular a média com for...of",
    "\n" + "-".repeat(35))

const nomeCompleto = 'Diego'
const alunos = ['Diego', 'Regina', 'Bruna', 'Caio']
const notas = [9, 8.3, 9.3, 7.2]

for (aluno of alunos) {
    console.log(aluno)
}
console.log('-')

for (letra of nomeCompleto) {
    console.log(letra)
}
console.log('-')

/**
 * for...of nos dá menos controle, sendo mais simples de ser utilizado
 * em alguns casos
 */
let somaDasNotas = 0
for (let nota of notas) {
    somaDasNotas += nota
}
const media = somaDasNotas / notas.length
console.log(`Média = ${media.toFixed(2)}`);
console.log('-')

const numeros2 = [5, 8, 6, 10, 7];
let soma2 = 0;

for (let i = 0; i < numeros2.length; i++) {
    soma2 += numeros2[i];
}

const media2 = soma2 / numeros2.length;

console.log("A média dos números é:", media2);