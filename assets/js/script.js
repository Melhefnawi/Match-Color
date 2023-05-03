// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

window.onload = () => {
    //add event listener to prevent the default behavior
    const mouseOnlyNumberInputField = document.getElementById("answer-box");
    const mouseOnlyNumber = document.getElementById("txt");
    const form = document.getElementById("formId");
    mouseOnlyNumberInputField.addEventListener("keypress", (event) => {
        event.preventDefault();
    });
    mouseOnlyNumber.addEventListener("keypress", (event) => {
        event.preventDefault();
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
};

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");


    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "start") {
                checkNameEntered();

            }
            else if (this.getAttribute("data-type") === "submit") {

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




});

function runGame() {

    document.getElementById("txt").value = "";
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
    let userName = document.getElementById("userName").value;
    if (userName === "") {
        alert(`Please Enter the UserName`);
    } else {
        let input = document.getElementById('answer-box');
        input.style.backgroundColor = color;
    }


}

function returnColor() {

    let textColor = document.getElementById('txt').value;
    if (textColor === "") {
        let num1 = Math.floor(Math.random() * 19);
        let colors = ["aqua", "beige", "black", "gold", "indigo", "magenta", "maroon", "navy", "olive", "orange", "peachpuff", "pink", "purple", "red", "gray", "violet", "yellow", "salmon", "turquoise"];
        document.getElementById('txt').value = colors[num1];
        return;
    }
}

function checkAnswer() {


    let geneColor1 = document.getElementById("txt").value;
    let numBoxColor2 = document.getElementById("answer-box");
    let PickedColor3 = numBoxColor2.style.backgroundColor;
    let userName = getUserName();

    if (userName === "") {
        alert(`please enter the userName`);
    }
    else if (PickedColor3 === "white") {

        alert(`please ${userName} choose a color`);
    }
    else if (geneColor1 === PickedColor3) {

        alert(`${userName} you choose the correct color`);
        incrementScore();
        setColor("white");
        runGame();

    } else {
        alert(`${userName} you choose incorrect color`);
        incrementWrongAnswer();
        setColor("white");
    }

}

function getUserName() {

    let userName = document.getElementById("userName").value;
    return userName;

}

function hideStartForm() {

    document.getElementById("UserName").style.display = "none";

}

function checkNameEntered() {

    let userName = document.getElementById("userName").value;
    if (userName === "") {
        alert(`Please Enter the UserName`);
    } else {
        hideStartForm();
        runGame();
    }

}

