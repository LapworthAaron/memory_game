var container = document.querySelector(".container");

var images = [
    "./images/dog.jpeg",
    "./images/boy.jpeg",
    "./images/window.jpeg",
    "./images/dice.jpeg"
  ];

container.addEventListener("click", function(event) {
    var element = event.target;

    // TODO: Complete function
    if (element.dataset.state === "hidden") {
        element.dataset.state = "shown";
        element.textContent = element.dataset.number;
    } else if (element.dataset.state === "shown") {
        element.dataset.state = "hidden";
        element.textContent = "";
    }
});
