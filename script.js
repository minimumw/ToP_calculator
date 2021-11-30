'use strict';

// Query selectors

const display = document.querySelector('.display-container');
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

// Event Listeners

// Write to display
numberBtns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    display.innerHTML += e.originalTarget.innerHTML;
  });
});

// Perform operation
let operation = '';
let displayValue = 0;
let num2 = 0;
let curResult = 0;

const operate = function (e) {
  curResult = operations[e.originalTarget.innerHTML](displayValue, num2);
};

operatorBtns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    // get current typed value, convert to number
    displayValue = +display.innerHTML;
    operation = e.originalTarget.innerHTML;
    console.log(displayValue, operation);
  });
});
