function convert()
{
let celsius = parseFloat(document.getElementById('tc').value);
let fahrenheit = ((celsius * 1.8) + 32).toFixed(2);
let kelvin = (celsius + 273.15).toFixed(2);
if ((isNaN(fahrenheit) == true) || (isNaN(kelvin) == true))
{
  fahrenheit = 'FLACO SI NO PONES UN NUMERO';
  kelvin = 'NO PUEDO HACER NADA PELELE';
};
document.getElementById('tf').innerHTML = fahrenheit;
document.getElementById('tk').innerHTML = kelvin;
}
