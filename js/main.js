const nome = prompt("Inserisci il tuo nome");

const cognome = prompt("Inserisci il tuo cognome")

const yearOfBirth = prompt("Inserisci l'anno di nascita");

const color = prompt("inserisci il tuo colore preferito");

const annoCorrente = 2022

const age = annoCorrente - yearOfBirth;

const fullName = nome + cognome;

const h2NomeUtente = document.getElementById("nome-cognome");

h2NomeUtente.innerHTML = fullName;


const annoDiNascita = document.getElementById("anno-nascita");

annoDiNascita.innerHTML = yearOfBirth

const colorePreferito = document.getElementById("colore-preferito")

colorePreferito.innerHTML = color


const tuttoInsieme = document.getElementById("tutto-insieme");

tuttoInsieme.innerHTML=`${fullName}${color}21`

const full = fullName + color

let userFull = document.getElementById("full");

userFull.innerHTML = full