// Functions that operate on other functionseither by taking them as arguments or byreturning them, are called higher-order functions.//


function run(fn) {
   return `Result: ${fn()}`
}

function sayHello() {
    console.log('Hello!!')
}

run(sayHello)

run(function() {
    console.log('run!!!')
})

const result = run(Math.random)
console.log(result)