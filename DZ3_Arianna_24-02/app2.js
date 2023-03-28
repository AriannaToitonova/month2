var number = Number(prompt('Enter first number'));
var number1 = Number(prompt('Enter second number'));
if(isNaN(number) || isNaN(number1)) console.log('Вы должны были ввести числа');
else{
    if
        (number>number1) console.log(number,'>',number1)
    else if
        (number<number1) console.log(number,'<',number1)
    else
        console.log(number,'=',number1)
}