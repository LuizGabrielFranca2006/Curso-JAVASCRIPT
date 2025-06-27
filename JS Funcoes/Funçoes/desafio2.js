const carrinho = [
    {nome: 'Caneta', qtde:10, preco: 7.99 , fragil: true},
    {nome: 'Impressora' , qtde: 0, preco: 649.50, fragil: true},
    {nome:'caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome:'lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'tesoura', qtde: 1, preco: 19.20, fragil: true},
    
]

//filte,map,reduce

//1 fragil: true

 const FragilTrue = item => item.fragil

 const itenstrue = carrinho
 .filter(FragilTrue)
 

 console.log(itenstrue)



//2 qtde: 4, preco 27.10 -> total
const itensIgualQuatro = item => item.qtde = 4
const getNome = item => item.nome
const getTotal = item => item.qtde * item.preco
const total = carrinho.map(getTotal)

const itensvalidos = carrinho
.map(getNome)
.filter(itensIgualQuatro)

console.log(itensvalidos)
console.log(total)

//3. Media totais
