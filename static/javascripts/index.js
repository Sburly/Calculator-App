// Buttons
const buttons = document.querySelectorAll(".calc-btn");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const oprBtn = document.querySelectorAll(".operation-btn");
const acBtn = document.querySelector("#ac");
const delBtn = document.querySelector("#del");
// Display
const display = document.querySelector("#display");
const previousNum = document.querySelector("#previous");
// Variables
let currentNumber = "";
let previousNumber = "";
let selectedOperator = "";
let goDown = false;
let result = false;

// Functions
function untoggleSelected() {
    for(let btn of oprBtn) {
        if(btn.classList.contains("selected")) {
            btn.classList.toggle("selected");
        };
    };
};

function addNumber() {
    untoggleSelected();
    if(result) {
        currentNumber = "";
        previousNumber = "";
        previousNum.innerText = previousNumber;
        display.innerText = currentNumber;
        result = false;
    };
    if(goDown) {
        previousNumber = currentNumber;
        previousNum.innerText = previousNumber;
        currentNumber = "";
        display.innerText = currentNumber;
        goDown = false;
    };
    let num = this.innerText;
    currentNumber += num;
    display.innerText = currentNumber;
};

function plusDis() {
    untoggleSelected();
    this.classList.toggle("selected");
    selectedOperator = "+";
    goDown = true;
};

function minusDis() {
    untoggleSelected();
    this.classList.toggle("selected");
    selectedOperator = "-";
    goDown = true;
};

function timesDis() {
    untoggleSelected();
    this.classList.toggle("selected");
    selectedOperator = "*";
    goDown = true;
};

function divideDis() {
    untoggleSelected();
    this.classList.toggle("selected");
    selectedOperator = "/";
    goDown = true;
};

function equalsFunc() {
    untoggleSelected();
    if(selectedOperator && previousNumber && currentNumber) {
        console.log(previousNumber + selectedOperator + currentNumber);
        currentNumber = eval(previousNumber + selectedOperator + currentNumber);
        previousNumber = "";
        selectedOperator = "";
        display.innerText = currentNumber;
        previousNum.innerHTML = previousNumber;
        result = true;
    }
};

function deleteNum() {
    if(!result) {
        currentNumber = currentNumber.slice(0, -1);
        display.innerText = currentNumber;
    }
};

function deleteEverything() {
    currentNumber = "";
    previousNumber = "";
    display.innerText = currentNumber;
    previousNum.innerText = previousNumber;
}

// Event Listener
for(let btn of buttons) {
    btn.addEventListener("click", addNumber);
};

plus.addEventListener("click", plusDis);

minus.addEventListener("click", minusDis);

times.addEventListener("click", timesDis);

divide.addEventListener("click", divideDis);

equals.addEventListener("click", equalsFunc);

acBtn.addEventListener("click", deleteEverything);

delBtn.addEventListener("click", deleteNum);