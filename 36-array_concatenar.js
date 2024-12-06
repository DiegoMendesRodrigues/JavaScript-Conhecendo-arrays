/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Concatenar elementos
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nArray - Concatenar elementos",
    "\n" + "-".repeat(35))

const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel'];

/**
 * .concat() - Retorna um novo array juntando os 2 array,
 * sem alterar os existentes
 * 
 * Concatenar as duas salar com todos os estudantes
 */
const salaTodosEstudantes = salaJS.concat(salaPython)
console.log(salaTodosEstudantes)
console.log(salaTodosEstudantes.sort())
console.log('-')

// Concatenar vários arrays
const salaCsharp = ['João', 'Ana', 'Juan']
const salaLinux = ['Diego', 'Bruna', 'Regina', 'Maria']
const salaTodos = salaJS.concat(salaPython, salaCsharp, salaLinux)
console.log(salaTodos)
console.log(salaTodos.sort())