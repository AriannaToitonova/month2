var num = parseInt(prompt("Введите целое положительное число:"));
var sum = 0;
for( i = 1; i <= num; i++) {
    sum += i;
}
console.log(`Сумма чисел от 1 до ${num} равна ${sum}`);