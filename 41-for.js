/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Percorrer a lista com for
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
 * @public
 * @author Diego Mendes Rodrigues
 */
/**
 * A instrução for cria um loop que consiste em três expressões
 * opcionais, dentro de parênteses e separadas por ponto e vírgula, 
 * seguidas por uma declaração ou uma sequência de declarações 
 * executadas em sequência.
 * 
 * for ([inicialização]; [condição]; [expressão final])
 *    declaração
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nArray - Percorrer a lista com for",
    "\n" + "-".repeat(35))

const alunos = ['Diego', 'Regina', 'Bruna', 'Caio']
const notas = [9, 8.3, 9.3, 7.2]

// Exibir o índice e o valor do array
for (let indice = 0; indice < alunos.length; indice++) {
    console.log(`${indice} = ${alunos[indice]}`)
}
console.log('-')

let indice = 1
for (; ; indice++) {
    console.log(`${indice} = ${alunos[indice]}`)
    if (indice >= 2) {
        break
    }
}
console.log('-')

// Calcular a média das notas
let somaDasNotas = 0
for (let indice = 0; indice < notas.length; indice++) {
    somaDasNotas += notas[indice]
}
let media = somaDasNotas / notas.length
console.log(`A média das notas é ${media.toFixed(2)}`)
console.log('-')

// Calcular a média das notas de uma matriz
const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8, 9.5]
const notasGerais = [notas1, notas2, notas3]
media = 0

// Não calcula muito bem, erra...
for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media += notasGerais[i][j] / notasGerais[i].length;
    }
}
media = media / notasGerais.length
console.log(`A média é ${media.toFixed(2)}`)
console.log('-')

// Calcula da forma correta
const notasGeraisLista = [...notas1, ...notas2, ...notas3]
media = 0
for (let i = 0; i < notasGeraisLista.length; i++) {
    media += notasGeraisLista[i]
}
media /= notasGeraisLista.length
console.log(`A média de ${notasGeraisLista.length} valores é ${media.toFixed(2)}`)
console.log('-')

const numeros = [100, 200, 300, 400, 500, 600]
for (let i = numeros.length - 1; i >= 0; i -= 2) {
    console.log(numeros[i])
}

console.log('-')
const numerosPares = []
for (let i = 0; i <= 100; i += 2) {
    numerosPares.push(i)
}
console.log(numerosPares)
console.log('-')

console.log('2 índices no mesmo for');
const lista = [1, 2, 3, 4, 5];
for (let i = 0, j = 20; i < lista.length; i++, j += 5) {
    console.log(`i: ${i} || j: ${j} || lista[i] + j: ${lista[i] + j}`);
}
console.log('-')

// String = Array
const nomePessoa = 'Regina'
// ['R', 'e', 'g', 'i', 'n', 'a']
let nomePessoaMaiusculas = ''

for (let i = 0; i < nomePessoa.length; i++) {
    nomePessoaMaiusculas += nomePessoa[i].toLocaleUpperCase()
}
console.log(nomePessoaMaiusculas)