function convert()
{
let bruh1 = false
let bruh2 = false
let bruh3 = false
let bruh4 = false
let bruh5 = false
let celsius = document.getElementById('tc').value

if (celsius == 'si')
{bruh1 = true}
if (celsius == 'sale lol?')
{bruh2 = true}
if (celsius == 'pc')
{bruh3 = true}
if (celsius == "Cho'gath")
{bruh4 = true}
if (celsius == 'Santiago Trini')
{bruh5 = true}


celsius = parseFloat(document.getElementById('tc').value);
let fahrenheit = ((celsius * 1.8) + 32).toFixed(2);
let kelvin = (celsius + 273.15).toFixed(2);
if (isNaN(fahrenheit) || isNaN(kelvin))
{
  fahrenheit = 'FLACO SI NO PONES UN NUMERO';
  kelvin = 'NO PUEDO HACER NADA';
};

if (bruh1 == true) {
  fahrenheit = 'si @jeico704';
  kelvin = 'si @angel2112';
};
if (bruh2 == true) {
  fahrenheit = 'si master de una';
  kelvin = 'anota: Marin37 #LAS';
};
if (bruh3 == true) {
  fahrenheit = 'MARISA-PC';
  kelvin = 'Esa es la pc que corre lol a 15 fps';
};
if (bruh4 == true) {
  fahrenheit = 'Buenardo el main';
  kelvin = 'Chorongat M7 100k puntos';
};
if (bruh5 == true) {
  fahrenheit = 'Alto capo el profe';
  kelvin = 'Agradecido con @SantiagoTrini';
};
document.getElementById('tf').innerHTML = fahrenheit;
document.getElementById('tk').innerHTML = kelvin;
}
