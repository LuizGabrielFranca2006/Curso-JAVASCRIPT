// somar (3)(4)(5)

function somar(a) {
    return function(b) {
        return function(c){
            return a + b + c
        }
    }
}

let somarABC = somar(3)(4)(5)
console.log(somarABC)

//calcular(3)(7)(fn)
// aqui ela da os parametros
function calcular(a) {
    return function(b){
        return function(fn) {
            return fn(a, b) 

                            
            
        }
    }
}

function multiplicar(a , b) {
    return a * b 
}

function divisor(a, b){
   return a / b
}
 
let calc1 = calcular(10)(5)(multiplicar)
let calc2 = calcular(10)(5)(divisor)
console.log(calc1)
console.log(calc2)