/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Desestruturação
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * https://cursos.alura.com.br/extra/alura-mais/destructuring-em-js-c308
 * @public
 * @author Diego Mendes Rodrigues
 */
/**
 * Atribuição via desestruturação (destructuring assignment)
 * 
 * A sintaxe de atribuição via desestruturação (destructuring 
 * assignment) é uma expressão JavaScript que possibilita extrair
 * dados de arrays ou objetos em variáveis distintas
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nArray - Desestruturação",
    "\n" + "-".repeat(35))

const alunos = ['Diego', 'Regina', 'Bruna', 'Caio']
const medias = [9, 8.3, 9.3, 7.2]
const lista = [alunos, medias]  // Matriz

/**
 * Função que busca a média de um aluno, caso encontre, exibe no
 * terminal
 */
function exibirNomeMedia(nomeAluno) {
    if (lista[0].includes(nomeAluno)) {
        // Desestruturação
        const [alunos, medias] = lista

        /**
         * Teremos duas novas variáveis (alunos e médias) cujo
         * conteúdo éproveniente da variável lista
         */
        const indice = alunos.indexOf(nomeAluno)
        const mediaAluno = medias[indice]
        console.log(`O aluno ${nomeAluno} tem a média ${mediaAluno.toFixed(2)}`)
    } else {
        console.log(`${nomeAluno} não está matriculado`)
    }
}

exibirNomeMedia('Bruna')
exibirNomeMedia('Diego')
exibirNomeMedia('Natalia')
console.log('-')

// Outros exemplos
let a, b
[a, b] = [1, 2]
console.log(a)
console.log(b)
console.log('-')

// Valor padrão
let c, d
[c = 5, d = 7] = [1]
console.log(c)  // 1
console.log(d)  // 7
console.log('-')

// Trocando variáveis
let aa = 1;
let bb = 3;
[aa, bb] = [bb, aa];
console.log(aa);    // 3
console.log(bb);    // 1
console.log('-')

const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]
const numeros = [...numerosPares, ...numerosImpares]
console.log(numeros)
console.log('-')

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]
console.log(num1, num2, outrosNumeros)
console.log(outrosNumeros)
console.log('-')

const pessoa = {
    nome: 'Diego',
    idade: 42
}
const pessoaComTelefone = {
    ...pessoa,
    telefone: '(11) 98888-7777'
}
console.log(pessoa)
console.log(pessoaComTelefone)
console.log('-')

const { nome } = pessoa
const { idade } = pessoa
console.log(nome, idade)
console.log('-')

function imprimeDados({ nome, telefone }) {
    console.log(nome, telefone)
}
imprimeDados(pessoaComTelefone)
console.log('-')

// Usando var++ e ++var
let i = 5;
let valorA = i++;
let valorB = ++i;

console.log("O valor de valorA é:", valorA);
console.log("O valor de valorB é:", valorB);