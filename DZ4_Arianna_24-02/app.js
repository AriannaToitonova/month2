var counterValue = 0;
var counter = document.getElementById("counterValue");
function increase() {
    counterValue++;
    counter.innerText = counterValue;
    updateColor();
}
function reset() {
    counterValue = 0;
    counter.innerText = counterValue;
    updateColor();
}
function decrease() {
    counterValue--;
    counter.innerText = counterValue;
    updateColor();
}
function updateColor() {
    if (counterValue > 0) {
        counter.style.color = "green";
    } else if (counterValue < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "gray";
    }
}