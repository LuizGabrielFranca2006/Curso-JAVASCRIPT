function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}


esperarPor(2000)
.then(() => console.log('Executando Promisse...'))
.then(esperarPor)
.then(() => console.log('Executando Promisse...'))
.then(esperarPor)
.then(() => console.log('Executando Promisse...'))


function retornarValor () {
    return new Promise(resolve => {
        setTimeout(() => resolve(10),500)
    })
}

async function retornarValorRapido() {
    return 20
}



async function executar () {

let valor = await retornarValor()

await esperarPor(2000)
console.log(`Async/Await 1 ${valor}...`)
await esperarPor(2000)
console.log( `Async/Await 2 ${valor + 1}...`)
await esperarPor(2000)
console.log(`Async/Await 3 ${valor + 2}...`)

return valor + 3

}

async function executarDeVerdade () {
    const valor = await executar()
    console.log(valor)

}

executarDeVerdade()