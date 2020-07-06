function convertC()
{
let bruh1 = false
let bruh2 = false
let bruh3 = false
let bruh4 = false
let bruh5 = false
let celsius = document.getElementById('tc').value

//TRIGGERS EASTER EGGS
if (celsius == 'si' || celsius == 'Si' || celsius == 'SI')
{bruh1 = true}
if (celsius == 'sale lol?' ||
celsius == 'Sale lol?' ||
celsius == 'sale lolcito?' ||
celsius == 'Sale lolcito?' ||
celsius == 'sale normal?' ||
celsius == 'Sale normal?'
)
{bruh2 = true}
if (celsius == 'pc' || celsius == 'PC')
{bruh3 = true}
if (celsius == "Cho'Gath")
{bruh4 = true}
if (celsius == 'Santiago Trini')
{bruh5 = true}

//FORMULA DE VERDAD
celsius = parseFloat(document.getElementById('tc').value);
let fahrenheit = ((celsius * 1.8) + 32).toFixed(2);
let kelvin = (celsius + 273.15).toFixed(2);
if (isNaN(fahrenheit) || isNaN(kelvin))
{
  fahrenheit = 'FLACO SI NO PONES UN NUMERO';
  kelvin = 'NO PUEDO HACER NADA';
};

//EASTER EGGS
if (bruh1 == true) {
  fahrenheit = 'si @jeico704 ';
  kelvin = 'si @angel2112 ';
};
if (bruh2 == true) {
  fahrenheit = 'si master de una ';
  kelvin = 'anota Marin37#LAS ';
};
if (bruh3 == true) {
  fahrenheit = 'MARISA-PC ';
  kelvin = 'Esa es la pc que corre lol a 15 fps ';
};
if (bruh4 == true) {
  fahrenheit = 'Buenardo el main ';
  kelvin = 'Chorongat M7 100k puntos ';
};
if (bruh5 == true) {
  fahrenheit = 'Alto capo el profe ';
  kelvin = 'Agradecido con @SantiagoTrini ';
};

//PARA QUE ANDE NORMAL
document.getElementById('tf').innerHTML = fahrenheit;
document.getElementById('tk').innerHTML = kelvin;
}

function convertF()
{
let fahrenheit = parseFloat(document.getElementById('tf').value);
let celsius = ((fahrenheit - 32) / 1.8).toFixed(2);
let kelvin = (celsius + 273.15).toFixed(2);
if (isNaN(celsius) || isNaN(kelvin))
{
  fahrenheit = 'FLACO SI NO PONES UN NUMERO';
  kelvin = 'NO PUEDO HACER NADA';
};
document.getElementById('tc').innerHTML = celsius;
document.getElementById('tk').innerHTML = kelvin;
}
