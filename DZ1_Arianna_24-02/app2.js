var num = 1; // можно изменить число для конвертации
var roman = ""; // пустая строка для хранения римского числа
if (num === 1) {
    roman = "I";
} else if (num === 2) {
    roman = "II";
} else if (num === 3) {
    roman = "III";
} else if (num === 4) {
    roman = "IV";
} else if (num === 5) {
    roman = "V";
} else if (num === 6) {
    roman = "VI";
} else if (num === 7) {
    roman = "VII";
} else if (num === 8) {
    roman = "VIII";
} else if (num === 9) {
    roman = "IX";
} else {
    console.log("Некорректное число для конвертации!");
}
console.log(roman);