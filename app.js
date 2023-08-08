//toglogchiin eeljiig hadgalah huvisagch
var activePlayer = 1;

//toglogchdiin tsugluulsan onoog hadgalah huvisagch
var score = [];
//toglogchdiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch
var roundScore = 0;
//shoonii ali talaaraa buusniig hadgalah huvisagch, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ugnuu
var dice = Math.floor(Math.random() * 6 ) + 1;

window.document.querySelector("#score-0").textContent = 0;

window.document.querySelector("#score-1").textContent = 0;

window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;

window.document.querySelector(".dice").style.display = 'none'

console.log("Шоо: " + dice);
