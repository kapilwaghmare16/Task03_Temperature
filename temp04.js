let tempInput = document.getElementById("temp-input");
let fromUnit = document.getElementById("from-unit");
let result = document.getElementById("result");
let resultUnit = document.getElementById("result-unit");

function convertTemperature() {
    let temp = parseFloat(tempInput.value);

    if (fromUnit.value === "Celsius") {
        result.innerHTML = (temp * 9/5) + 32;
        resultUnit.innerHTML = "Fahrenheit";
    } else if (fromUnit.value === "Fahrenheit") {
        result.innerHTML = (temp - 32) * 5/9;
        resultUnit.innerHTML = "Celsius";
    } else if (fromUnit.value === "Kelvin") {
        result.innerHTML = (temp - 273.15) * 9/5 + 32;
        resultUnit.innerHTML = "Fahrenheit";
    }
}

tempInput.addEventListener("input", convertTemperature);
fromUnit.addEventListener("change", convertTemperature);
