const METER2FEET = 3.28084;
const FEET2METER = 0.3048;
const LITER2GALLON = 0.264172;
const GALLON2LITER = 3.78541;
const KG2POUND = 2.20462;
const POUND2KG = 0.453592;

const convertBtn = document.querySelector("#convert-btn");
const inputEl = document.querySelector("input[type='number']");
const lengthTextEl = document.querySelector("#length-conversion p");
const volumeTextEl = document.querySelector("#volume-conversion p");
const massTextEl = document.querySelector("#mass-conversion p");

function convertUnits() {
    const inputValue = inputEl.value;

    lengthTextEl.textContent = `${inputValue} meters = ${(inputValue * METER2FEET).toFixed(3)} feet 
    | ${inputValue} feet = ${(inputValue * FEET2METER).toFixed(3)} meters`;
    volumeTextEl.textContent = `${inputValue} liters = ${(inputValue * LITER2GALLON).toFixed(3)} gallons 
    | ${inputValue} gallons = ${(inputValue * GALLON2LITER).toFixed(3)} liters`
    massTextEl.textContent = `${inputValue} kilos = ${(inputValue * KG2POUND).toFixed(3)} pounds 
    | ${inputValue} pounds = ${(inputValue * POUND2KG).toFixed(3)} kilos`;
}