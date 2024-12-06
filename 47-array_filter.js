/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Filtrar
 * Apoio:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nArray - Filtrar",
  "\n" + "-".repeat(35))

/**
 * Desafio: Filtrar os alunos que estão com a média menor que 7
 * 
 * filter() realiza um filtro no Array, retornando outro array
 * com o resultado
 */
const nomes = ['Ana', 'Bruna', 'Caio', 'Julia', 'Alessandra']
const medias = [9, 6, 5, 7.5, 6.6]
console.log(nomes)
console.log(medias)
console.log('-')

// Exemplo de filtro: Conter mais que 4 letras
const nomesTamanho = nomes.filter(nome => nome.length > 4)
console.log(nomesTamanho)
console.log('-')

// Exemplo de filtro: media >= 0
const mediasMaiorSete = medias.filter(media => media >= 7)
console.log(mediasMaiorSete)
console.log('-')

/**
 * Filtrar e separar alunos reprovados (media < 7) 
 * e aprovados (media >= 7)
 * 
 * Quando não usamos um parâmetro, colocamos o nome dele _
 */
const reprovados = nomes.filter((_, indice) => {
  return medias[indice] < 7
})
const aprovados = nomes.filter((_, indice) => {
  return medias[indice] >= 7
})
console.log(`Reprovados = ${reprovados}`)
console.log(`Aprovados = ${aprovados}`)
console.log('-')

// Filtrar elementos inválidos em um JSON
const json = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let itensInvalidos = 0

function filtroPorId(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true
  }
  itensInvalidos++
  return false
}

const jsonValido = json.filter(filtroPorId)
console.log(jsonValido)
console.log(`Ítens inválidos: ${itensInvalidos}`)
console.log('-')

// Filtrar strings
const frutas = ['Maçã', 'Banana', 'Morango', 'Melão', 'Melancia', 'Laranja']

function filtrarFrutas(lista, itemFiltro) {
  return lista.filter((item) =>
    item.toLowerCase().includes(itemFiltro.toLowerCase())
  )
}

console.log(filtrarFrutas(frutas, 'Me'))
console.log(filtrarFrutas(frutas, 'm'))
console.log(filtrarFrutas(frutas, 'BANANA'))
console.log('-')

// Filter pula os itens vazios do array
console.log([1, , undefined].filter((x) => x === undefined))
console.log([1, , undefined].filter((x) => x !== 2))