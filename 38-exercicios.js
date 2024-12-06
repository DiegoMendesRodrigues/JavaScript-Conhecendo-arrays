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

// Crie uma função que receba dois arrays e os concatene em um único array.

console.log('-')

// Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const parteNumeros = numeros.slice(2, 7)
console.log(numeros)
console.log(parteNumeros)
console.log('-')

// Dado o array frutas contendo frutas que desejamos comprar na feira:
// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
console.log(frutas)
frutas.splice(2, 2, 'Kiwi', 'Pêssego')
console.log(frutas)
console.log('-')

// Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
const menuPrincipal = ['Macarrão', 'Filé ao molho madeira']
const menuDeSobremesas = ['Sorvete', 'Salada de Frutas', 'Sagu']
menuCompleto = menuPrincipal.concat(menuDeSobremesas)
console.log(menuCompleto)
console.log('-')

// Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
// Dicas:
// Comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
// Você pode resolver usando um for dentro de outro for.
const matriz = []
for (let linha = 0; linha < 3; linha++) {
    let linhaColuna = []
    for (let coluna = 0; coluna < 3; coluna++) {
        linhaColuna.push(coluna)
    }
    matriz.push(linhaColuna)
}
console.log(matriz)
console.log('-')

// Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
console.log(matriz[1][2])
console.log('-')

// Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
matriz[2][1] = 15
console.log(matriz)
console.log('-')