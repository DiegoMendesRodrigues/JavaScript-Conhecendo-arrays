/**
 * Curso de JavaScript: Conhecendo arrays
 * Exercícios
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nExercícios",
  "\n" + "-".repeat(35))
/**
 * Faça uma função que aceite vários arrays como argumentos 
 * e retorne um único array contendo todos os elementos dos 
 * arrays fornecidos, utilizando Spread Operator.
 * 
 * Dica: é possível usar o spread operator diretamente em um
 * parâmetro de função para "espalhar" seu conteúdo, por exemplo
 * function funcaoExemplo(...params).
 */
function concatenarListas(...listas) {
  return listas.reduce((acumulador, atual) => {
    return acumulador.concat(atual)
  }, [])
}

const lista1 = ['Diego']
const lista2 = ['Natalia', 'Julia']
const lista3 = ['Bruna', 'Nayara', 'Regina']

console.log(concatenarListas(lista1, lista2, lista3))
console.log('-')

// Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
const numeros = [1, 3, 6, 2, 11]
const somaNumeros = numeros.reduce((acum, num) => acum + num, 0)
console.log(somaNumeros)
console.log('-')

/**
 * Considere duas listas de cores:
 * 
 * const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
 * 
 * const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
 * 
 * Crie um programa que una essas duas listas, removendo cores
 * duplicadas e exiba a lista final.
 */
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
const cores = [...new Set(coresLista1.concat(coresLista2))].sort()
console.log(cores)
console.log('-')

// Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
function numerosPares(numerosRecebidos) {
  const numeros = [...new Set(numerosRecebidos)].sort()
  return numeros.filter(num => num % 2 === 0)
}
const numerosDiversos = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numerosPares(numerosDiversos))
console.log('-')

// Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
function numerosMultiplos3Maiores5(numerosRecebidos) {
  const numeros = [...new Set(numerosRecebidos)].sort()
  return numeros.filter(num => (num % 3 === 0) && num > 5)
}
console.log(numerosMultiplos3Maiores5(numerosDiversos))
console.log('-')

// Crie uma função que receba um array de números e retorne a soma de todos os elementos.
function somarNumeros(numerosRecebidos) {
  return numerosRecebidos.reduce((acum, num) => acum + num, 0)
}
console.log(numerosDiversos)
console.log(somarNumeros([...numerosDiversos]))
console.log('-')