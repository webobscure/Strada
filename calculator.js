let result = document.getElementById('result');
let equal = document.getElementById('equal');

let operations = {
    add: 'add',
    substract: 'substract',
    divide: 'divide',
    multiple: 'multiple',
    pow: 'pow'
}

function calc( ) {
    let a = +document.querySelectorAll('.numbers')[0].value;
    let b = +document.querySelectorAll('.numbers')[1].value;
    let operator = document.getElementById('operator').value;

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

equal.addEventListener('click', () => result.innerHTML = +calc().toFixed(10))

function checkOperands(operand) {
    return typeof operand === 'number'
}


