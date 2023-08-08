//toglogchiin eeljiig hadgalah huvisagch
var activePlayer = 1;

//toglogchdiin tsugluulsan onoog hadgalah huvisagch
var score = [];
//toglogchdiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch
var roundScore = 0;
//shoonii ali talaaraa buusniig hadgalah huvisagch, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ugnuu
window.document.getElementById("score-0").textContent = '0';

window.document.getElementById("score-1").textContent = '0';

window.document.getElementById("current-0").textContent = '0';

window.document.getElementById("current-1").textContent = '0';


var diceDom = document.querySelector(".dice");
diceDom.style.display = 'none'
document.querySelector(".btn-roll").addEventListener('click', function (){
      var diceNumber = Math.floor(Math.random() * 6 ) + 1;

      diceDom.style.display = 'block';
      diceDom.src = "dice-" + diceNumber + ".png";



});
