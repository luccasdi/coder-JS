const num = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(num.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getNome = item => item.nome
const valor = item => item.qtde * item.preco
console.log(carrinho.map(getNome))
const totais = carrinho.map(valor)
console.log(totais)


Array.prototype.meuMap = function(fn){
    const mapped = []
    for(let i = 0; i<this.length; i++){
        mapped.push(fn(this[i], i, this))        
    }
    return mapped
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))

