function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(2000)
    .then(() => console.log('Executando promise1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise3...'))

function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar(){
    let valor = await retornarValor()
    await esperarPor(2000)
    console.log(`async/await 1 ${valor} ...`)
    await esperarPor(2000)
    console.log(`async/await 2 ${valor + 1} ...`)
    await esperarPor(2000)
    console.log(`async/await 3 ${valor + 2} ...`)

    return valor +3
}

async function executarDeVerdade(){
    let resposta = await executar()
    console.log(resposta)
}

executarDeVerdade()


executar()