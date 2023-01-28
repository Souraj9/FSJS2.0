// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.






function calculator(val1,operator,val2) {
    let result;
    switch (operator) {
        case '/':
            result= val1 / val2;
             break;
        case '*':
            result= val1 * val2;
            break;
        case '-':
            result= val1 - val2;
            break;
        case '+':
            result= val1 + val2;
            break;   
        case '%':
            result= val1 % val2;
            break;      
    
        default:
            console.log('please enter a valid value');
            result= null;
            break;
    }
    if (result) {
        console.log(`The result of ${val1} ${operator} ${val2} is : ${result}`);
    }
}
//put value:
let val1 = 10 ;
let val2 = 2 ;
let operator = '+' ;
calculator(val1,operator,val2)

