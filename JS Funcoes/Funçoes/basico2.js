function bomDia() {
    console.log('Bom Dia!')
}

const  boaTarde = function abc() {
    console.log('Boa Tarde!')
}

// utilizar sempre comparaçoes estritas === 

// 1) Passar uma funçao como parametro para outra funçao
function executarQualquerCoisa(fn)  {
    if(typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)


// 2) retornar uma funçao a partir de outra funçao

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
      } 
}

const bits8 = potencia(2)
console.log(bits8)


const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))


console.log(potencia(3)(4))

const resultadoPot = potencia(3)(4)
console.log(resultadoPot)