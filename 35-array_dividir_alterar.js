/**
 * Curso de JavaScript: Conhecendo arrays
 * Array - Dividir e Alterar
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nArray - Dividir e Alterar",
    "\n" + "-".repeat(35))

/**
 * .slice(inicio, fim) - Dividir Array
 * Esse método gera um novo Array() como resultado
 */
const estudantes = ['João', 'Ana', 'Juan', 'Diego',
    'Bruna', 'Regina', 'Maria']

// Criar 2 salas, cada uma com metade dos estudantes 
const salaJavascript = estudantes.slice(0, estudantes.length / 2)
const salaPython = estudantes.slice(estudantes.length / 2)
console.log(salaJavascript)
console.log(salaPython)
console.log('-')

// .splice() - Alterar o Array (Remover e adicionar)
const estudantesCcs = ['Maria', 'Ana', 'Juan', 'Maria', 'Diego']
console.log(estudantesCcs)
console.log(estudantesCcs.sort())

// João e Maria sairam da escola CCS, e no seu lugar, entrou o Claudio
const estudanteEntrou = 'Claudio'
const estudadeSairam = estudantesCcs.splice(2, 2, estudanteEntrou)
console.log(`Sairam os estudantes ${estudadeSairam} para entrar o ${estudanteEntrou}`)
console.log(estudantesCcs.sort())
console.log('-')

// Exemplo adicional
const animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']
animaisDoAquario.splice(1, 0, 'sardinha')
console.log(animaisDoAquario)
animaisDoAquario.splice(3, 2, 'atum')
console.log(animaisDoAquario)