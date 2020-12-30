function run(fn){
    return fn()
}

function sayHello(){
    console.log('Hello')
}

run(sayHello)

run(function(){
    console.log('run')
})

const result = run(Math.random)
console.log(result)