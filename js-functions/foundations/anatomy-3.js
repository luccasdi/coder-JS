// Function Expression
const increment1 = function(n){
    return n +1
}

// Function Arrow
const increment2 = (n) => {
    return n +1
}

const increment3 = n => {
    return n +1
}

const increment4 = n => n + 1


console.log(increment1(1));
console.log(increment2(5));
console.log(increment3(24));
console.log(increment4(199));

const sum = (a, b ) => a + b;
console.log(sum(3,8));

const somar = array => {
    let soma = 0
    for(let n of array){
        soma += n
    }
    return soma
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))