const { resolve } = require("path");

setTimeout(function() {
    console.log('executando Callback1')
    setTimeout(function() {
        console.log('Executando Callback2')
        setTimeout(function() {
            console.log('Executando Callback3')
        }, 2000);
    }, 2000)
}, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log('Executando Promise')
            resolve('Vishh') 
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)
    // .then(texto => console.log(texto))