let firstOperand = document.getElementById('firstOperand')
let secondOperand = document.getElementById('secondOperand')
let operator = document.getElementById('operator')
let result = document.getElementById('result')
let equal = document.getElementById('equal')






equal.onclick = function(event) {
    if (checkOperands(a) && checkOperands(b)) {
        switch(operator) {
            
        }
    }
}


console.log(result,firstOperand,secondOperand);



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


