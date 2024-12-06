/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - set
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nArray - set",
  "\n" + "-".repeat(35))

/**
 * Desafio: Remover duplicatas de uma lista
 * ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']
 * Remova os nomes repetidos, deixando apenas um de cada
 */
const nomesRepetidos = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']

/**
 * Iremos criar um set, que é um conjunto de dados que armazena
 * valores unicos, ao contrário do array, que pode ter elementos
 * repetidos.
 * 
 * 'O objeto Set permite que você armazene valores únicos de
 * qualquer tipo, desde valores primitivos a referências a objetos.'
 * 
 * O set é um conjunto de dados que é um 'array like', ou seja,
 * 'tipo um array', mas não é um array.
 * 
 * Precisamos então transformar o set em um array.
 *  */
const nomesSet = new Set(nomesRepetidos)
console.log(nomesSet)

// Conversão do set para array
const nomes = [...nomesSet]
console.log(nomes)
console.log('-')

// Refatorar para uma forma mais elegante
const nomesAtualizados = [...new Set(nomesRepetidos)]
console.log(nomesAtualizados)
console.log('-')

// Propriedades do Set()
console.log(nomesSet.size)

console.log(nomesSet.add('Eduardo'))
console.log(nomesSet)

console.log(nomesSet.has('Clara'))
console.log(nomesSet.has('Claudio'))

console.log(nomesSet.delete('Maria'))
console.log(nomesSet.delete('João'))
console.log(nomesSet)

nomesSet.add(true)
nomesSet.add(20)
nomesSet.add([10, 'Regina', true])
console.log(nomesSet)

console.log([...nomesSet])