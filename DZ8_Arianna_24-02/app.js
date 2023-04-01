//Укороченная версия кода
import chroma from "chroma-js";
document.getElementById('btn').addEventListener('click', () => {
    const color = chroma.random();
    document.querySelector('.color-box').style.backgroundColor = color;
    document.querySelector('.color-value').textContent = color;
});




// import chroma from "chroma-js"
// const btn = document.getElementById('btn');
// const colorValue = document.querySelector('.color-value');
// const colorBox = document.querySelector('.color-box');
// function generateRandomColor() {
//     const randomColor = chroma.random();
//     return randomColor;
// }
// function setRandomColor() {
//     const color = generateRandomColor();
//     colorBox.style.backgroundColor = color;
//     colorValue.textContent = color;
// }
// btn.addEventListener('click', setRandomColor);