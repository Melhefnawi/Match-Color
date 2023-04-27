// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let color = this.getAttribute("data-type");
                setColor(color);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    runGame();

});

function runGame() {

    document.getElementById("txt").value = "";
    let num1 = Math.floor(Math.random() * 20) + 1;
    let colors = ["aqua", "beige", "black", "gold", "indigo", "magenta", "maroon", "navy", "olive", "orange", "peachpuff", "pink", "purple", "red", "gray", "violet", "yellow", "salmon", "turquoise"];
    let color = colors[num1];
    returnColor();
}


function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}


function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function setColor(color) {

    let input = document.getElementById('answer-box');
    input.style.backgroundColor = color;
}

function returnColor() {

    let textColor = document.getElementById('txt').value;
    if (textColor === "") {
        let num1 = Math.floor(Math.random() * 20) + 1;
        let colors = ["aqua", "beige", "black", "gold", "indigo", "magenta", "maroon", "navy", "olive", "orange", "peachpuff", "pink", "purple", "red", "gray", "violet", "yellow", "salmon", "turquoise"];
        document.getElementById('txt').value = colors[num1];
    }
}

function checkAnswer() {

    let color1 = document.getElementById("txt").value;
    let color2 = document.getElementById("answer-box");
    let color3 = color2.style.backgroundColor;

    if (color1 === color3) {

        alert(`you choose correct color`);
        incrementScore();
        runGame();

    } else {
        alert(`you choose incorrect color`);
        incrementWrongAnswer();
    }

}

