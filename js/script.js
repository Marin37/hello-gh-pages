function convert()
{
let celsius = parseFloat(document.getElementById('tc').value);
let fahrenheit = ((celsius * 1.8) + 32).toFixed(2);
let kelvin = (celsius + 273.15).toFixed(2);

document.getElementById('tk').innerHTML = kelvin;
document.getElementById('tf').innerHTML = fahrenheit;
}
