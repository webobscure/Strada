let operations = {
    add: 'add',
    substract: 'substract',
    divide: 'divide',
    multiple: 'multiple',
    pow: 'pow'
}

function calc( operator, a , b ) {
    if (checkOperands(a) && checkOperands(b)) {
        switch(operator) {
            case operations.add :
              return  a + b;
            
            case operations.substract :
                return  a - b;
            
            case operations.divide :
                return parseInt(a / b);
            
            case operations.multiple :
                return a * b;
    
            case operations.pow : 
                return a ** b;
    
            default: return console.log('Choose the operation!');
        }
    } 

    return 'Incorrect operands'
}

function checkOperands(operand) {
    return typeof operand === 'number'
}

console.log(calc(operations.add, 5, 3));
console.log(calc(operations.substract, 200, 245));
console.log(calc(operations.divide, 50, 7));
console.log(calc(operations.multiple, 5, 10))
console.log(calc(operations.multiple, 2, 10));
