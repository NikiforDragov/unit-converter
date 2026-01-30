/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById('unit-input');
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', function () {
    const unit = Number(inputEl.value);

    console.log(convertLength(unit));
    console.log(convertVolume(unit));
    console.log(convertMass(unit));
});

function convertLength(value) {
    const FEET_FACTOR = 3.28084;

    const meterToFeet = (value * FEET_FACTOR).toFixed(3);
    const feetToMeter = (value / FEET_FACTOR).toFixed(3);

    return `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters`;
}

function convertVolume(value) {
    const GALLON_FACTOR = 0.264172;

    const literToGallon = (value * GALLON_FACTOR).toFixed(3);
    const gallonToLiter = (value / GALLON_FACTOR).toFixed(3);

    return `${value} liters = ${literToGallon} gallons | ${value} gallons = ${gallonToLiter} liters`;
}

function convertMass(value) {
    const POUND_FACTOR = 2.20462;

    const kgToLbs = (value * POUND_FACTOR).toFixed(3);
    const lbsToKg = (value / POUND_FACTOR).toFixed(3);

    return `${value} kilos = ${kgToLbs} pounds | ${value} pounds = ${lbsToKg} kilos`;
}
