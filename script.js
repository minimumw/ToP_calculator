'use strict';

// Query selectors

const display = document.querySelector('.display-container');
const displayInput = document.getElementById('input');
const history = document.getElementById('history-display');
const numberBtns = document.querySelectorAll('.num-btn');
const operatorBtns = document.querySelectorAll('.operation-btn');
const clearBtn = document.querySelector('.clear-btn');
const deleteBtn = document.querySelector('.delete-btn');
const equalBtn = document.querySelector('.equal-btn');

// Operations
const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  'x': (x, y) => x * y,
  '÷': (x, y) => x / y,
};

// Variables
let operation = '';
let num1 = 0;
let num2 = 0;
let curResult = 0;

// Functions

const writeDisplay = function (e) {
  input.innerHTML += e.originalTarget.innerHTML;
  if (input.innerHTML.includes('.')) return;
};

const operate = function (e) {
  num2 = +displayInput.innerHTML;
  if (!num2) return;
  history.innerHTML = '';
  curResult = operations[operation](+num1, +num2);
  input.innerHTML = curResult;
};

const performOperation = function (e) {
  if (!history.innerHTML) {
    num1 = +input.innerHTML;
    operation = e.originalTarget.innerHTML;
    history.innerHTML += ` ${num1} ${operation}`;
    displayInput.innerHTML = '';
  } else {
    num2 = +displayInput.innerHTML;
    curResult = operations[operation](num1, num2);
    operation = e.originalTarget.innerHTML;
    displayInput.innerHTML = '';
    history.innerHTML = ` ${curResult} ${operation}`;
    num1 = curResult;
  }
};

const clearAll = function (e) {
  operation = '';
  num1 = 0;
  num2 = 0;
  curResult = 0;
  input.innerHTML = '';
  displayInput.innerHTML = '';
  history.innerHTML = '';
};

const deleteLastChar = function (e) {
  displayInput.innerHTML = displayInput.innerHTML.slice(0, -1);
};

operatorBtns.forEach(btn => {
  btn.addEventListener('click', performOperation);
});

// Event Listeners
numberBtns.forEach(btn => {
  btn.addEventListener('click', writeDisplay);
});

equalBtn.addEventListener('click', operate);

clearBtn.addEventListener('click', clearAll);

deleteBtn.addEventListener('click', deleteLastChar);
