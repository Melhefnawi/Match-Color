
//add event listener to prevent the default behavior
window.onload = () => {

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

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

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

// main function of the game 
function runGame() {

    document.getElementById("txt").value = "";
    returnColor();
}

// function to increment the score 
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}
// function to increment the wrong score
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}
// function to set the color in the text box after clicking the required color
function setColor(color) {

    let userName = document.getElementById("userName").value;
    if (userName === "") {
        alert(`Please Enter the UserName`);
    } else {
        let input = document.getElementById('answer-box');
        input.style.backgroundColor = color;
    }

}
// function to return the random color
function returnColor() {

    let textColor = document.getElementById('txt').value;
    if (textColor === "") {
        let num1 = Math.floor(Math.random() * 19);
        let colors = ["aqua", "beige", "black", "gold", "indigo", "magenta", "maroon", "navy", "olive", "orange", "peachpuff", "pink", "purple", "red", "gray", "violet", "yellow", "salmon", "turquoise"];
        document.getElementById('txt').value = colors[num1];
        return;
    }
}
// function to check if the chosen color is correct
function checkAnswer() {

    let geneColor1 = document.getElementById("txt").value;
    let numBoxColor2 = document.getElementById("answer-box");
    let pickedColor3 = numBoxColor2.style.backgroundColor;
    let userName = getUserName();

    if (userName === "") {
        alert(`please enter the userName`);
    }
    else if (pickedColor3 === "white") {

        alert(`please ${userName} choose a color`);
    }
    else if (geneColor1 === pickedColor3) {

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
// function to get the username from submission form
function getUserName() {

    let userName = document.getElementById("userName").value;
    return userName;

}
// function to hide the form after clicking start button 
function hideStartForm() {

    document.getElementById("UserName").style.display = "none";

}
// function to check if the username was entered
function checkNameEntered() {

    let userName = document.getElementById("userName").value;
    if (userName === "") {
        alert(`Please Enter the UserName`);
    } else {
        hideStartForm();
        runGame();
    }

}

