/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Procurar elementos
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * @public
 * @author Diego Mendes Rodrigues
 */
/**
 * Array.prototype.includes()
 * O método includes() determina se um array contém um determinado 
 * elemento, retornando true ou false apropriadamente.
 * 
 * Array.prototype.indexOf()
 * O método indexOf() retorna o primeiro índice em que o elemento 
 * pode ser encontrado no array, retorna -1 caso o mesmo não 
 * esteja presente.
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nArray - Procurar elementos",
    "\n" + "-".repeat(35))

const alunos = ['Diego', 'Regina', 'Bruna', 'Caio']
const medias = [9, 8.3, 9.3, 7.2]
const lista = [alunos, medias]  // Matriz

/**
 * Função que busca a média de um aluno, caso encontre, exibe no
 * terminal
 */
function exibirNomeMedia(nomeAluno) {
    if (lista[0].includes(nomeAluno)) {     // includes() retorna true ou false
        const indice = lista[0].indexOf(nomeAluno)
        const mediaAluno = lista[1][indice]
        console.log(`O aluno ${nomeAluno} tem a média ${mediaAluno.toFixed(2)}`)
    } else {
        console.log(`${nomeAluno} não está matriculado`)
    }
}

exibirNomeMedia('Bruna')
exibirNomeMedia('Diego')
exibirNomeMedia('Natalia')