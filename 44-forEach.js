/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - forEach
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * https://github.com/airbnb/javascript#iterators-and-generators
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nArray - forEach",
    "\n" + "-".repeat(35))

const notas = [9, 8.3, 9.3, 7.2, 6.4]
const alunos = ['Diego', 'Regina', 'Bruna', 'Caio']
let somaDasNotas = 0
let media = 0

/**
 * Somar o valor das notas com forEach
 * 
 * O forEach é uma função de callback, ou seja, definimos uma
 * função dentro dela, e esta, é executada para cada elemento
 * do array
 * 
 * No exemplo abaixo, o parametro 'nota' da função criada,
 * guarda as informações dos elementos de 'notas', durante o 
 * loop que acontece no forEach
 * 
 * O forEach retorna undefined, ou seja, ele executa a 
 * função de callback, mas não retorna nada
 * 
 * O forEach é um método do objeto Array!
 */
notas.forEach(function (nota) {
    somaDasNotas += nota
})

console.log(somaDasNotas)

media = somaDasNotas / notas.length
console.log(media.toFixed(2));
console.log('-')

/** 
 * Outra forma, criando a função callback que irá realizar 
 * a soma, fora do forEach
 */
somaDasNotas = 0
media = 0

function somarNotas(nota) {
    somaDasNotas += nota
}

notas.forEach(somarNotas)

media = somaDasNotas / notas.length
console.log(somaDasNotas);
console.log(media.toFixed(2));
console.log('-')

/**
 * Simplificando (arrow functions)
 * FORMA DE USO RECOMENDADA!
 */
somaDasNotas = 0
notas.forEach(nota => somaDasNotas += nota)
console.log(somaDasNotas);
console.log('-');

somaDasNotas = 0
notas.forEach(nota => {
    somaDasNotas += nota
})

console.log(somaDasNotas);
console.log('-');

// Trazendo o índice e o valor
alunos.forEach(function (nome, indice) {
    console.log(`Índice: ${indice} || Valor: ${nome}`);

})

console.log('-')