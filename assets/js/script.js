var container = document.querySelector(".container");
var screenClickCount = document.querySelector("#clickcount");
var screenMatch = document.querySelector("#matches");

var images = [
    "url('./assets/images/dog.jpg')",
    "url('./assets/images/boy.jpg')",
    "url('./assets/images/window.jpg')",
    "url('./assets/images/dice.jpg')",
    "url('./assets/images/earth.jpg')",
    "url('./assets/images/flower.jpg')",
    "url('./assets/images/jpeg.jpg')",
    "url('./assets/images/happy.jpg')",
    "url('./assets/images/dog.jpg')",
    "url('./assets/images/boy.jpg')",
    "url('./assets/images/window.jpg')",
    "url('./assets/images/dice.jpg')",
    "url('./assets/images/earth.jpg')",
    "url('./assets/images/flower.jpg')",
    "url('./assets/images/jpeg.jpg')",
    "url('./assets/images/happy.jpg')"
];

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var randomArrayNumbers = [];
var clickCount = 0;
var click1img = "";
var click2img = "";
var matches = 0;

//randomly order the numbers, to put the images in a random order
//the index+1 of the images array directly relate to the data-number
function randomiseNumbers() {
    for (i = numbers.length-1; i >= 0 ; i--) {
        var randIndex = Math.floor((Math.random() * numbers.length));
        randomArrayNumbers[i] = numbers[randIndex]
        numbers.splice(randIndex, 1)
    }
}

randomiseNumbers();

//apply styling to reveal tile
function applyStyling(iVal,el) {
    el.dataset.state = "shown";
    el.style.backgroundImage = iVal;
    el.style.backgroundRepeat = "no-repeat";
    el.style.backgroundSize = "cover";
}

container.addEventListener("click", function(event) {
    var element = event.target;
    var indexVal = randomArrayNumbers[element.dataset.number-1];

    //Clicking to reveal image
    if (element.dataset.state === "hidden") {
        if (clickCount === 0) {
            applyStyling(images[indexVal-1], element);
            element.classList.add("clicked");
            click1img = images[indexVal-1];
            click1Number = element.dataset.number;
            clickCount++
            screenClickCount.textContent = clickCount;
        } else if (clickCount === 1) {
            applyStyling(images[indexVal-1], element);
            click2img = images[indexVal-1];
            clickCount++;
            screenClickCount.textContent = clickCount;
        }
        if (clickCount === 2) {
            if (click1img === click2img) {
                element.dataset.state = "match";

                var firstClick = document.querySelector(".clicked");
                firstClick.classList.remove("clicked");
                firstClick.dataset.state = "match";
                matches++;
                clickCount = 0;
                click1img = "";
                click2img = "";
                click1 = "";
                click2 = "";
                screenClickCount.textContent = clickCount;
                screenMatch.textContent = matches;
            } else { 
                //need to put a set interval function here, to show the cards for a few seconds
                var timerInterval = setTimeout(function () {
                    element.dataset.state = "hidden";

                    var firstClick = document.querySelector(".clicked");
                    firstClick.classList.remove("clicked");
                    firstClick.dataset.state = "hidden";
                    clickCount = 0;
                    element.style = null;
                    firstClick.style = null;
                    click1 = "";
                    click2 = "";
                    click1img = "";
                    click2img = "";
                    screenClickCount.textContent = clickCount;
                    }, 1000);
                
            }
        }
    //clicking to hide image
    } else if (element.dataset.state === "shown") {
        if (clickCount > 0) {
            element.dataset.state = "hidden";
            // element.style.backgroundImage = "none";
            element.style = null;
            element.classList.remove("clicked");
            if (clickCount === 1) {
                click1 = "";
            } else {
                click2 = "";
            }
            clickCount--
            screenClickCount.textContent = clickCount;
        }
    }
});
