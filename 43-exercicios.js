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

// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const pessoas = ['Ana', 'Maria', 'Luana']
for (nome of pessoas)
    console.log(nome);
console.log('-');

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function imprimirNomes(listaPessoas) {
    for (let i = 0; i < listaPessoas.length; i++) {
        console.log(`Índice: ${i} || Elemento: ${listaPessoas[i]}`);
    }
}
imprimirNomes(pessoas)
console.log('-');

// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
function somarValores(valores) {
    let soma = 0
    for (let valor of valores) {
        soma += valor
    }
    return soma
}
const numeros = [10, 5, 21, 8]
console.log(somarValores(numeros))
console.log('-');

// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
function menorMaiorValor(valores) {
    let menor = valores[0]
    let maior = 0
    for (let valor of valores) {
        if (valor >= maior) maior = valor
        if (valor <= menor) menor = valor
    }
    console.log(`O menor número é ${menor} e o maior número é ${maior}`);
}
menorMaiorValor(numeros)
console.log('-');

// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numerosDiversos = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
function exibirPares(valores) {
    for (let valor of valores) {
        if (valor % 2 === 0) console.log(valor)
    }
}
exibirPares(numerosDiversos)
console.log('-');

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
function calcularMedia(valores) {
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    return soma / valores.length
}
console.log(`Média = ${calcularMedia(numerosDiversos).toFixed(2)}`);
console.log('-');