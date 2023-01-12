var container = document.querySelector(".container");

var images = [
    "url('./assets/images/dog.jpg')",
    "url('./assets/images/boy.jpg'",
    "url('./assets/images/window.jpg'",
    "url('./assets/images/dice.jpg'",
    "url('./assets/images/earth.jpg'",
    "url('./assets/images/flower.jpg'",
    "url('./assets/images/jpeg.jpg'",
    "url('./assets/images/happy.jpg'",
    "url('./assets/images/dog.jpg'",
    "url('./assets/images/boy.jpg'",
    "url('./assets/images/window.jpg'",
    "url('./assets/images/dice.jpg'",
    "url('./assets/images/earth.jpg'",
    "url('./assets/images/flower.jpg'",
    "url('./assets/images/jpeg.jpg'",
    "url('./assets/images/happy.jpg'"
];

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var randomArrayNumbers = [];

function randomiseNumbers() {
    for (i = numbers.length-1; i >= 0 ; i--) {
        var randIndex = Math.floor((Math.random() * numbers.length));
        randomArrayNumbers[i] = numbers[randIndex]
        numbers.splice(randIndex, 1)
    }
}

randomiseNumbers();
console.log(randomArrayNumbers);
console.log(images);

container.addEventListener("click", function(event) {
    var element = event.target;
    var indexVal = randomArrayNumbers[element.dataset.number-1];
    console.log(randomArrayNumbers[element.dataset.number-1]);
    console.log(images[indexVal-1]);
    if (element.dataset.state === "hidden") {
        element.dataset.state = "shown";
        // element.textContent = element.dataset.number;
        element.style.backgroundImage = images[indexVal-1];
        // element.style.repeat = "no-repeat";
        element.style.backgroundSize = "cover";
    } else if (element.dataset.state === "shown") {
        element.dataset.state = "hidden";
        element.style.backgroundImage = "none"    
    }
});
