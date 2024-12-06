/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - map
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nArray - map()",
  "\n" + "-".repeat(35))

/**
 * O método map() invoca a função callback passada por argumento 
 * para cada elemento do Array e devolve um novo Array como resultado.
 * 
 * arr.map(callback[, thisArg])
 */

/**
 * Desafio: Adicionar 1 ponto extra na nota de cada aluno, sendo que
 * a maior nota do aluno deve ser 10
 */
let notas = [9, 8.3, 9.3, 7.2, 6.4]
const notasAtualizadas = notas.map(nota => (nota + 1) >= 10 ? 10 : nota + 1)
console.log(notas, '\n', notasAtualizadas)
console.log('-')

/**
 * Desafio: Remover 1 ponto extra na nota de cada aluno, sendo que
 * a mamenor nota do aluno deve ser 0
 */
notas = [9.5, 8.5, 7.3, 6.2, 0.4]
const notasComDecrescimo = notas.map(nota => (nota - 1) <= 0 ? 0 : nota - 1)
console.log(notas, '\n', notasComDecrescimo)
console.log('-')

// Exibir a raiz quadrada dos valores que estão no array
notas = [4, 9, 16, 25, 36]
const raizQuadrada = notas.map(Math.sqrt)
console.log(notas, '\n', raizQuadrada)
console.log('-')

// Utilizar uma função com um parâmetro no callback
notas = [9, 8.3, 9.3, 7.2, 6.4]
const notasSomadas = notas.map(function (nota) {
  return nota + 5
})
console.log(notas, '\n', notasSomadas)
console.log('-')

// Converter um array de strings em números
const arrayNumeros = ['1', '3', '5'].map(Number)
console.log(arrayNumeros);
console.log('-')

/**
 * Desafio: Padronizar uma lista de alunos para que todos os
 * elementos estejam em letras maiúsculas 
 */
const nomes = ['ana', 'Julia', 'CaIo', 'BIA silva']
const nomesMaiusculas = nomes.map(nome => nome.toUpperCase())
console.log(nomesMaiusculas)
console.log('-')

/**
 * Desafio: Vinicius está fazendo vários testes de código para 
 * resolver um problema de ajustes de texto em uma lista de 
 * produtos de sua loja online. Ele precisa adicionar o texto 
 * “ - unidade” em todos os produtos da loja.
 */
const listaProdutos = ['pôster A4', 'pôster A5', 'camiseta lisa', 'camiseta estampada', 'pin de metal', 'cartela de adesivos']
const listaProdutosAjustada = listaProdutos.map(produto => `${produto} - unidade`)
console.log(listaProdutosAjustada)
console.log('-')

/**
 * Utilizar uma função externa sendo executada na callback do map()
 * 
 * Para o JavaScript, qualquer função que seja chamada como 
 * argumento de outra é considerada uma função callback, não 
 * apenas em caso de métodos. 
 */
function multiplicarPorDez(numero) {
  return numero * 10
}

notas = [9, 8.3, 9.3, 7.2, 6.4]
const notasVezesDez = notas.map(multiplicarPorDez)
console.log(notasVezesDez);
console.log('-')