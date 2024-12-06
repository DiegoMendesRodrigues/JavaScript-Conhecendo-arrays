/**
 * Curso de JavaScript: Conhecendo arrays
 * Cálculo de média e primeiros passos com array
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
 * @public
 * @author Diego Mendes Rodrigues
 */
/**
 * Nesta aula, vamos trabalhar com array, que é um tipo de estrutura 
 * de dados. 
 * Ao contrário de uma variável, que guarda somente um valor por vez, 
 * um array (ou lista) pode armazenar diversos valores. Pode ser 
 * usado, por exemplo, para agrupar diferentes dados que têm relação 
 * entre si. 
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nCálculo de média e primeiros passos com array",
    "\n" + "-".repeat(35))

// const notas = new Array(10, 6.5, 8, 7.5)
const notas = [10, 6.5, 8, 7.5]

/**
 * Acessar os itens (elementos) do array, através de notas[índice], 
 * sendo que o índice começa com 0
 */
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media)
console.log('-')

// Alterar valores do array
console.log(notas)
notas[0] = 5.1
notas[2] = 4.3
console.log(notas)
media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media)
console.log('-')

/**
 * Listas podem possuir diferentes tipos de variáveis
 * O mais comum é termos listas sempre com o mesmo dado
 */
const pessoa = ['Diego', 40, true, [20, 30], { nota1: 9, nota2: 8 }]
console.log(pessoa)
console.log(pessoa[0])
console.log(pessoa[1])
console.log(pessoa[2])
console.log(pessoa[3])
console.log(pessoa[4])
console.log('-')