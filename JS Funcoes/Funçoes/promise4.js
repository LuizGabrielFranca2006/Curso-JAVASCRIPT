

function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]  
    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
           const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
        })
       
    }

    function gerarVariousNumeros() {
        return Promise.all([
            gerarNumerosEntre(1,60, 500),
                        gerarNumerosEntre(1,60, 3000),
                                    gerarNumerosEntre(1,60, 1000),
                                                gerarNumerosEntre(1,60, 1500),
                                                            gerarNumerosEntre(1,60, 4000),



        ])
    }

    gerarVariousNumeros()
    .then(numeros => console.log(numeros ))
    .then(()=> {
        console.timeLog('promise')
        console.timeEnd('Promise')
    })

    console.timeLog('PROMISE')
    console.timeEnd('Pormisse')