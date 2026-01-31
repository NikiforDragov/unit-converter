/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById('convert-btn');
const inputEl = document.getElementById('unit-input');

const meterFeetP = document.getElementById('m-ft-result');
const literGallonP = document.getElementById('l-gallons-result');
const kgLbsP = document.getElementById('kg-lbs-result');

convertBtn.addEventListener('click', function () {
    const unit = Number(inputEl.value);

    meterFeetP.innerHTML = convertLength(unit);
    literGallonP.innerHTML = convertVolume(unit);
    kgLbsP.innerHTML = convertMass(unit);
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
