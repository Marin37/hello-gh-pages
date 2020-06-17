function convert()
{
let bruh == false
let celsius = document.getElementById('tc').value
if (celsius == 'si')
{
  bruh = true
}
celsius = parseFloat(document.getElementById('tc').value);
let fahrenheit = ((celsius * 1.8) + 32).toFixed(2);
let kelvin = (celsius + 273.15).toFixed(2);
if (isNaN(fahrenheit) || isNaN(kelvin))
{
  fahrenheit = 'FLACO SI NO PONES UN NUMERO';
  kelvin = 'NO PUEDO HACER NADA';
};
if (bruh == true) {
  fahrenheit = 'si @jeico704';
  kelvin = 'si @angel2112';
};
document.getElementById('tf').innerHTML = fahrenheit;
document.getElementById('tk').innerHTML = kelvin;
}
