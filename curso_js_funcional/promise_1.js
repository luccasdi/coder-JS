let p = new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

// p.then(function(valor){
//     console.log(valor)
// })

p
    .then(valor => console.log(valor))
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))