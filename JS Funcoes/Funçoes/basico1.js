//Function Declaration

function bomDia() {
    console.log('Bom Dia')
}

bomDia()

//Function Expression

const boaTarde = function () {
    console.log('Boa Tarde')
}


boaTarde()
let x = boaTarde()  // Undefined
console.log(x)

// se colocar o b = 0 ele assumira o numero 0, nao precisando colocar um numero representante nele
function somar (a, b) { 
    return a + b
}
 
let resultado = somar(3,4)  
console.log(resultado)

// vai ignorar os outros numeros
resultado = somar(3,4,5,6,7)     
console.log(resultado)

resultado = somar(3)
console.log(resultado)
//  nao e um numero NaN