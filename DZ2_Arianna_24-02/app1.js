var num = 1;
var roman = "";
switch (num) {
    case 1:
        roman = "I";
        break;
    case 2:
        roman = "II";
        break;
    case 3:
        roman = "III";
        break;
    case 4:
        roman = "IV";
        break;
    case 5:
        roman = "V";
        break;
    case 6:
        roman = "VI";
        break;
    case 7:
        roman = "VII";
        break;
    case 8:
        roman = "VIII";
        break;
    case 9:
        roman = "IX";
        break;
    default:
        console.log("Некорректное число для конвертации!");
}
console.log(roman);