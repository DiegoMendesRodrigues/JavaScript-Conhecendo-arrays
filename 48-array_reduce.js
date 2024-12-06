/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Reduce
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nArray - Reduce",
  "\n" + "-".repeat(35))

/**
 * Desafio: Calcular a média geral de cada sala
 */
const mediasJs = [7, 8, 6.4, 6, 5, 9, 10]
const mediasPython = [9, 8, 6, 7, 9.3]
const mediasJava = [6, 6, 7.9, 7, 5.2]

function calcularMedia(listaDeNotas) {
  const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
    return acumulador + nota
  },
    0 // Valor inicial do acumulador
  )
  return Number(somaDasNotas / listaDeNotas.length).toFixed(2)
}

console.log(`Média da sala JS = ${calcularMedia(mediasJs)}`)
console.log(`Média da sala Python = ${calcularMedia(mediasPython)}`)
console.log(`Média da sala Java = ${calcularMedia(mediasJava)}`)
console.log('-')

// Calcular a média das 3 salas, da forma tradicional
const mediasTresSalas = ((
  Number(calcularMedia(mediasJs))
  + Number(calcularMedia(mediasPython))
  + Number(calcularMedia(mediasJava))) / 3).toFixed(2)
console.log(`Média das 3 salas = ${mediasTresSalas}`)
console.log('-')

// Calcular a média das 3 salas com reduce()
const mediaDasSalas = [Number(calcularMedia(mediasJs)), Number(calcularMedia(mediasPython)), Number(calcularMedia(mediasJava))]
console.log(mediaDasSalas)
console.log(`Média das 3 salas = ${calcularMedia(mediaDasSalas)}`)
console.log('-')

// Usar a funcao reduce de uma forma mais elegante
function calcularMediaElegante(lista) {
  const soma = lista.reduce((acum, atual) => acum + atual, 0)
  return Number(soma / lista.length).toFixed(2)
}
console.log(`Média da sala JS = ${calcularMediaElegante(mediasJs)}`)
console.log(`Média da sala Python = ${calcularMediaElegante(mediasPython)}`)
console.log(`Média da sala Java = ${calcularMediaElegante(mediasJava)}`)
console.log('-')

// Usar a funcao reduce sendo a função callback externa
function subtrairValores(acumulador, valor) {
  return acumulador - valor
}

const diferencaJs = 100 + mediasJs.reduce(subtrairValores, 0)
console.log(`100 - (Soma das notas JS) = ${diferencaJs.toFixed(2)}`)
console.log('-')

// Reduzir uma Matriz
const matriz = [[2, 3], [7, 8]]
const matrizReduzida = matriz.reduce((acum, atual) => acum.concat(atual), [])
console.log(matriz)
console.log(matrizReduzida)
console.log('-')

// Contando valores iguais
let nomesPessoas = ["Alice", "Diego", "Julia", "Diego", "Alice"]
let qtdePessoas = nomesPessoas.reduce(function (todosNomes, nome) {
  if (nome in todosNomes) {
    todosNomes[nome]++
  } else {
    todosNomes[nome] = 1
  }
  return todosNomes
}, {})
console.log(nomesPessoas)
console.log(qtdePessoas)
console.log('-')

// Removendo itens duplicados de um array
const listaDeNumeros = [1, 2, 1, 2, 3, 5, 4, , 5, 3, 4, 4, , 4]
console.log(listaDeNumeros)

const resultado = listaDeNumeros.sort().reduce((inicial, atual) => {
  if (inicial.length === 0 || (inicial[inicial.length - 1] !== atual)) {
    inicial.push(atual)
  }
  return inicial
}, [])
console.log(resultado)
console.log('-')