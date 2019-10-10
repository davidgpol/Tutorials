"use strict"

// Funcion que se define pero que no se ejecuta.
var iifeV1 = function IIFE() {
  return console.log('Funcion ejecutada');
};

// Si la ejecutamos simplemente nos pondra la declaracion de la funcion.
iifeV1;

// Si le ponemos () al final, JavaScript la interpretara como una funcion
// y la ejecutara como tal.
iifeV1();

// Si utilizamos los () para envolver la propia funcion, JavaScript legal
// ejecutara al momento y quedara asignada a una variable

var iifeV2 = (function IIFE(param) {
  return console.log('Funcion ejecutada con parametro: ' + param);
});

iifeV2('Mi parametro');
