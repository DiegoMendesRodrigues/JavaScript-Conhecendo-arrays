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

// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
const meuArrayInicial = Array(10)
console.log(meuArrayInicial)
meuArrayInicial[1] = 'Diego'
meuArrayInicial[3] = 'Regina'
meuArrayInicial[7] = 'Bruna'
console.log(meuArrayInicial)
console.log(meuArrayInicial.length)
console.log('-')

// Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
const arrayCincoElementos = Array(5)
console.log(arrayCincoElementos)
arrayCincoElementos[0] = 'JavaScript'
console.log(arrayCincoElementos)
console.log('-')

// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
const meuArray = []
meuArray.push(3)
meuArray.push(7)
meuArray.push(12)
console.log(meuArray)
meuArray[0] *= 2
console.log(meuArray)
console.log('-')

// Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
const pessoa = []
pessoa.push('Diego')
pessoa.push('Divorciado')
pessoa.push(true)
pessoa.push(42)
pessoa.push(21)
pessoa.push(7)
console.log(pessoa)
console.log('-')

// Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
const clinica = []
clinica.push('Lobão')
clinica.push('Bart')
clinica.push('Paçoca')
console.log(clinica)
clinica.pop()
clinica.pop()
clinica.pop()
console.log(clinica)
console.log('-')