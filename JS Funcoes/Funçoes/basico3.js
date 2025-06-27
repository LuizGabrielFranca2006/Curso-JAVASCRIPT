// Arrow function

const FelizNatal = () => console.log('Feliz Natal')
FelizNatal()

const saudacao = nome => `Fala ${34.5 + 34.5}, blz?` 

console.log(saudacao('Maria'))

const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros) {
        total += n

    }
    return total
}

const subtrair = (a,b) => a - b
console.log(subtrair(4,1))


console.log(somar(1,2,3))
console.log(somar(1,2,3,4,5,6))
console.log(somar(1,2,3,4,5,6,7,8,9,10))


//Funçao dentro de funcao em arrow function


const potencia = base => exp =>  Math.pow(base, exp)
console.log(potencia(2)(8))


// this

Array.prototype.ultimo =function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function() {
    console.log(this[0])
}

const numeros = [1,2,3,500]
numeros.ultimo()
numeros.primeiro()
