/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Métodos
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nArray - Métodos",
    "\n" + "-".repeat(35))

let notas = [6, 2, 7, 10]
notas.push(21)
notas.push(15)
console.log(notas)
console.log('-')

notas = ['6', '2', '7', '3', '1', '8']
const notasOrdenadas = notas.sort()
console.log(notasOrdenadas)
console.log('-')

const nomes = ['Regina', 'Bruna']
console.log(nomes)
console.log(nomes.reverse())
console.log('-')

/**
 * O método splice() altera o conteúdo de uma lista, adicionando 
 * novos elementos enquanto remove elementos antigos
 */
let meses = ['Jan', 'Mar', 'Abr']
console.log(meses)
meses.splice(1, 0, 'Feb')
console.log(meses)

meses = ['Jan', 'Mar', 'Abr']
console.log(meses)
meses.splice(1, 2, 'Feb')
console.log(meses)
console.log('-')

// Percorrer com forEach
let pessoas = ['Regina', 'Bruna', 'Diego']
pessoas.forEach((elemento) => console.log(elemento))
console.log('-')

pessoas.forEach((conteudo, item) => {
    console.log(`${item} = ${conteudo}`)
})