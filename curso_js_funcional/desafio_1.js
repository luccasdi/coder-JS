// somar (3)(4)(5)

function somar(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(5))

function calcular (x){
    return function (y){
        return function (fn){
            return fn (x,y)
        }
    }
}

function subtrair (a,b){
    return a -b
}

function multiply (a,b){
    return a * b
}

const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(multiply)
console.log(r1, r2)