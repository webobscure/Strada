function calc( operator, a , b ) {
    if (checkOperands(a) && checkOperands(b)) {
        switch(operator) {
            case 'add' :
              return  a + b;
            
            case 'substract' :
                return  a - b;
            
            case 'divide' :
                return parseInt(a / b);
            
            case 'multiple' :
                return a * b;
    
            case 'pow' : 
                return a ** b;
    
            default: return console.log('Choose the operation!');
        }
    } 

    return 'Incorrect operands'
}

function checkOperands(operand) {
    return typeof operand === 'number'
}

console.log(calc('add', 5, 3));
console.log(calc('substract', 200, 245));
console.log(calc('divide', 50, 7));
console.log(calc('multiple', 5, 10))
console.log(calc('pow', 2, 10));
