
const carrinho = [
    {nome: 'Caneta', qtde:10, preco: 7.99},
    {nome: 'Impressora' , qtde: 0, preco: 649.50},
    {nome:'caderno', qtde: 3, preco: 5.82},
    {nome:'lapis', qtde: 3, preco: 5.82},
    {nome: 'tesoura', qtde: 1, preco: 19.20},
    
]
const getNome = item => item.nome 
const qtdeMaiorQueZero = item => item.qtde > 0
//const qtdeMuitoGrande = item => item.qtde >= 1000
//const qtdeMaiorIgualAZERO = item => item.qtde >= 0

const itensValidos =  carrinho
//.filter(qtdeMaiorIgualAZERO)
.map(getNome)


console.log(itensValidos)

Array.prototype.meuFilter = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++){
       if( fn(this[i], i, this)) {
        novoArray.push(this[i])
       }
         
    }
    
    return novoArray
}

const itensValidos2 =  carrinho
.meuFilter(qtdeMaiorQueZero)
.map(getNome)


console.log(itensValidos2)