// Anonymous function
// IIFE - Immediately Invokated Functiin Expression
(function (a, b, c)  {
    let x = 3
    console.log(`result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);

(function ()  {
    let x = 300
    console.log(x)
})();

(() => {
console.log('arrow #01')
})();

(() => console.log('arrow #02'))();