/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Spread syntax (...)
 * Apoio:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nArray - Spread syntax (...)",
  "\n" + "-".repeat(35))

/**
 * Desafio: Considere a seguinte lista:
 * [5, 7, 8, 6, 9]
 * Criar uma nova lista, adicionando a nota 10, sem alterar a
 * lista original
 */
const listaNumeros = [5, 7, 8, 6, 9]

/**
 * Operador de espalhamento - Spread operator (...)
 * Pega todos os valores do array original, 'abre o array', depois
 * espalha no novo array
 *  */
const novaListaNumeros = [...listaNumeros, 10]

console.log(listaNumeros)
console.log(novaListaNumeros)
console.log('-')

// Somar valores com spread
function somar(numero1, numero2, numero3) {
  return numero1 + numero2 + numero3
}

const valores = [2, 5, 3]
console.log(somar(...valores))
console.log('-')

// Converter array em objeto
const nomes = ['Ana', 'Bruna', 'Diego']
const nomesObj = { ...nomes }
console.log(nomes)
console.log(nomesObj)
console.log('-')

const maisNomes = ['Julia', ...nomes, 'Regina']
console.log(maisNomes)
console.log('-')

/**
 * Como passar um array para uma função
 * const lista = [ valores ]
 * 
 * Forma errada, pois ela passa a referência da função, 
 * não uma cópia dela
 * minhaFuncao(lista) { declarações }
 * 
 * Forma correta, onde passamos uma cópia da função utilizando
 * spread
 * minhaFuncao([...lista]) { declarações }
 */
function exibirNomes(nomesPessoas) {
  nomesPessoas.push('Regina')
  nomesPessoas.forEach(nome => {
    console.log(`- ${nome}`)
  });
}

/**
 * Forma correta, o array nomesExibir não é alterado, pois foi 
 * passada uma cópia do array para a função
 */
const nomesExibir = ['Natalia', 'Bruna', 'Diego']
exibirNomes([...nomesExibir])
console.log(nomesExibir)
console.log('.')

/**
 * Forma incorreta, o array nomesExibir é alterado, pois foi passado
 * como referência para a função
 */
exibirNomes(nomesExibir)
console.log(nomesExibir)
console.log('-')