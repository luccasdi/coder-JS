// Create a range function
// range(5) -> [1, 2, 3, 4, 5]
function range(a, b, c){
     const nums = [];
     for(let i = 1; i<=a; i++){
         nums.push(i);
     }
     return nums;
}
console.log(range(5));

// range(6, 11) -> [6, 7, 8, 9, 10, 11]
function range (a, b, c){
    const n1 = b === undefined ? 1 : a;
    const n2 = b === undefined ? a : b;
    const nums = [];
    for(let i = n1; i <=n2; i++){
        nums.push(i)
    }
    return nums;
}
console.log(range(6, 11));

// range(10, 19, 2) -> [10, 12, 14, 16, 18]
function range (a, b, c=1){
    const n1 = b === undefined ? 1 : a;
    const n2 = b === undefined ? a : b;
    const nums = [];
    for(let i = n1; i <=n2; i += c){
        nums.push(i)
    }
    return nums;
}
console.log(range(10, 19, 2));

// range(6,2) -> [6, 5, 4, 3, 2]
function range (a, b, c = 1){
    const n1 = b === undefined ? 1 : a;
    const n2 = b === undefined ? a : b;
    const step = n1 <= n2 ? Math.abs(c) : -Math.abs(c);
    const nums = [];
    for(let i = n1; n1 <= n2 ? i <=n2 : i >= n2; i+=step){
        nums.push(i);
    }
    return nums;
}
console.log(range(6,2));

// range(8, -3, 4) -> [8, 4, 0]
function range (a, b, c = 1){
    const n1 = b === undefined ? 1 : a;
    const n2 = b === undefined ? a : b;
    const step = n1 <= n2 ? Math.abs(c) : -Math.abs(c);
    const nums = [];
    for(let i = n1; n1 <= n2 ? i <=n2 : i >= n2; i+=step){
        nums.push(i);
    }
    return nums;
}
console.log(range(8, -3, 4));

//-------------Função que atinge tudo o que foi solicitado------

function range (a, b, c = 1){
    const n1 = b === undefined ? 1 : a;
    const n2 = b === undefined ? a : b;
    const step = n1 <= n2 ? Math.abs(c) : -Math.abs(c);
    const nums = [];
    for(let i = n1; n1 <= n2 ? i <=n2 : i >= n2; i+=step){
        nums.push(i);
    }
    return nums;
}

console.log(range(5));
console.log(range(6, 11));
console.log(range(10, 19, 2));
console.log(range(6,2));
console.log(range(8, -3, 4));

//--------------Funções feitas pra teste abaixo-----------------

function range1 (nums){
    for(let cont = 1; cont <= nums; cont ++){
        console.log(cont);    
    } 
}
range1(5);

function range2 (num1, num2){
    for(let cont = num1; cont <=num2; cont++){
        console.log(cont);
    }
}
range2(6, 11);

function range3 (num1, num2, aux){
    for(let cont = num1; cont <= num2; cont += aux){
        console.log(cont);
    }
}
range3(10, 19, 2);

function range4(num1, num2){
    for(let cont = num1; cont >= num2; cont--){
        console.log(cont);
    }
}
range4(6, 2);

function range5(num1, num2, aux){
    for(let cont = num1; cont >= num2; cont -= aux){
        console.log(cont);
    }
}
range5(8, -3, 4);