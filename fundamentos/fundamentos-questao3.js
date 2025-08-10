//3) Escreva um programa que faça a conversão de temperaturas entre Celsius e Fahrenheit.

let celsius = 35;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

fahrenheit = 86;
celsius = (fahrenheit - 32) * 5/9;
console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
