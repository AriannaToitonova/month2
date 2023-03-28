// let btn = document.getElementById('btn');
// let num1 = document.getElementById('num1');
// let num2 = document.getElementById('num2');
// let num3 = document.getElementById('num3');
// let num4 = document.getElementById('num4');
// let num5 = document.getElementById('num5');
// let num6 = document.getElementById('num6');
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// btn.addEventListener('click', () => {
//     num1.innerText = getRandomNumber(1, 99);
//     num2.innerText = getRandomNumber(1, 99);
//     num3.innerText = getRandomNumber(1, 99);
//     num4.innerText = getRandomNumber(1, 99);
//     num5.innerText = getRandomNumber(1, 99);
//     num6.innerText = getRandomNumber(1, 99);
// });


let btn = document.getElementById('btn');
let nums = [num1, num2, num3, num4, num5, num6];
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
btn.addEventListener('click', () => {
    for (let i = 0; i < nums.length; i++) {
        nums[i].innerText = getRandomNumber(1, 99);
    }
});