let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let msgBox = document.querySelector(".win");

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let turn0 = true;
const reset = () => {
    turn0 = true;
    enableBoxes();
    msgBox.classList.add("hide");

}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            box.style.color = "#FFA987";
            console.log("button pressed!");
            turn0 = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "#E54B4B";
            console.log("button pressed!");
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgBox.classList.remove("hide");
    disabledboxes();
}

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const checkWinner = () => {
    for (pattern of winPatterns) {
        let value1 = boxes[pattern[0]].innerText;
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;
        if (value1 != "" && value2 != "" && value3 != "") {
            if (value1 === value2 && value2 === value3) {
                showWinner(value2);

            }

        }
    }

}

resetBtn.addEventListener("click", reset);
newBtn.addEventListener("click", reset);