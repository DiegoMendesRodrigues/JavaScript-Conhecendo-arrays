/**
 * Curso de JavaScript: Conhecendo arrays
 * Exercícios
 * Apoio:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nExercícios",
  "\n" + "-".repeat(35))

// Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const nomes = ['Ana', 'Bruna', 'Julia']
nomes.forEach((nome, indice) => console.log(indice, nome))
console.log('-')

// Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array, e uma função de callback, que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
function executaOperacaoEmArray(lista, funcaoCallback) {
  return lista.map(funcaoCallback)
}

function dobrarNumero(numero) {
  return numero * 2
}

const numeros = [2, 4, 6]
const numerosDobrados = executaOperacaoEmArray(numeros, dobrarNumero)
console.log(numeros, numerosDobrados)
console.log('-')

// Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
function procurarNumero(numero, listaNumeros) {
  return listaNumeros.includes(numero) ? listaNumeros.indexOf(numero) : -1
}
const numerosBase = [2, 4, 6, 11, 20]
console.log(procurarNumero(1, numerosBase))
console.log(procurarNumero(6, numerosBase))
console.log(procurarNumero(20, numerosBase))
console.log(procurarNumero(3, numerosBase))
console.log('-')

/* Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
]

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
]

Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.
*/
function buscarAluno(aluno, listaDeAlunos) {
  const alunoProcurado = listaDeAlunos.find(nomeBuscado => nomeBuscado === aluno)
  if (alunoProcurado) {
    console.log('Aluno encontrado:', alunoProcurado);
  } else {
    console.log('Aluno não encontrado:', aluno);
  }
}

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
]
const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
]
const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)
console.log(todasAsTurmas)

buscarAluno('Diego Lobato', todasAsTurmas)
buscarAluno('Carlos Oliveira', todasAsTurmas)
console.log('-')

/*
Considere um array de números inteiros.
const numeros = [6, 9, 12, 15, 18, 21]

Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
*/
const numerosInteiros = [6, 9, 12, 15, 18, 21]
numerosInteiros.forEach(numero => console.log(`${numero} * 3 = ${numero * 3}`))

const buscarDezoito = numero => numero === 18

console.log(numerosInteiros.findIndex(buscarDezoito))
console.log('-')