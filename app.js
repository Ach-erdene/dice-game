var activePlayer;
var scores;
var roundScore;
var diceDom = document.querySelector(".dice");
function inittgame(){
      activePlayer = 0;

//toglogchdiin tsugluulsan onoog hadgalah huvisagch

      scores = [0, 0];
//toglogchdiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch
      roundScore = 0;
//shoonii ali talaaraa buusniig hadgalah huvisagch, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ugnuu
window.document.getElementById("score-0").textContent = '0';

window.document.getElementById("score-1").textContent = '0';

window.document.getElementById("current-0").textContent = '0';

window.document.getElementById("current-1").textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');
diceDom.style.display = 'none';

}
// shoog shideh event
inittgame();
document.querySelector(".btn-roll").addEventListener('click', function (){
      //1-6 hurtelh sanamsargui toog gargaj avna
      var diceNumber = Math.floor(Math.random() * 6 ) + 1;
      //shoonii zurgiig display deer gargaj irne
      diceDom.style.display = 'block';
      diceDom.src = "dice-" + diceNumber + ".png";
      //toglogchiin eeljiin onoog uurchiluh
      if(diceNumber !== 1){
            //1 ees yalgaatai too buulaa onoog nemj ugnu
            roundScore = roundScore + diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;

      }else{
            //1 buusan tul toglogchiin hesgiig ene hesegt solij ugnu
            switchToNextPlayer();
            
            
      }
});

//hold
document.querySelector(".btn-hold").addEventListener("click" ,function(){
      // ug toglogch ni tsugluulsan eeljnii onoog global onoon deer ni nemj ugnu
      scores[activePlayer] = scores[activePlayer] + roundScore;
      document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
      //ug toglogch hojson esehiig shalgah onoo 100 aas ih 
      if(scores[activePlayer] >= 100){
            document.getElementById('name-' + activePlayer).textContent = " Winner!!!";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      }else{
            switchToNextPlayer();
      }
});

function switchToNextPlayer(){
      roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = 0;
            // herev activeplayer 0 baival 1 bolgo
            // herev activeplayer 1 baival 0 bolgo
            activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
            //ulaan tsegiig shiljuuleh
            document.querySelector('.player-0-panel').classList.toggle("active");
            document.querySelector('.player-1-panel').classList.toggle("active");
            diceDom.style.display = 'none';

};
// shine togloom ehluuleh tovch
document.querySelector('.btn-new').addEventListener('click', inittgame);
