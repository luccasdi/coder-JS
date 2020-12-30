//Anonymous Function
// IIFE
(function (a, b, c) {
    console.log(`Result: ${a + b + c}`);
})(1, 2, 3);

(()=> {
    console.log('arrow #01')
})();