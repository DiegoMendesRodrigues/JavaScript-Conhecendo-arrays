/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Excluir elementos, dentre outras funções
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nArray - Excluir elementos, dentre outras funções",
    "\n" + "-".repeat(35))

// Função que calcula a média das notas
const calcularMedia = notas => ((notas[0] + notas[1] + notas[2] + notas[3]) / notas.length).toFixed(2);

const notas = [9.3, 4.6, 7.5, 8.2, 6.75]

/**
 * Remover a última nota, pois um aluno deve ter apenas 4, 
 * modificando o array notas
 */
const notaRemovida = notas.pop()
console.log(notaRemovida)

const media = calcularMedia(notas)
console.log(`Média do aluno = ${media}`)