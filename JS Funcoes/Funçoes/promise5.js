function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve,reject)=>{
        try {
            con.log('temp')
            if(math.random() < chanceErro) {
                reject('Ocorreu um erro!')

            }else {
                resolve(valor)
            }
        }catch (e) {
            reject(e)
        }
            
                
           
    })
    
} 

funcionarOuNao('Testando...', 0.5)
.then(v => `valor: ${v}`)
.then(
    v =>consol.log(v),
    err => console.log (`erro esp.: ${err}`)
)
.then(() => console.log ('Quase Fim!'))
.catch(err => console.log(`Erro geral: ${err}`))
.then(() => console.log('Fim!'))