
const playerScoreView = document.getElementById("playerscore");
const computerScoreView = document.getElementById("computerscore");
const com = document.getElementById("computer");
const player = document.getElementById("player");
const result = document.getElementById("result");
const btns = document.querySelectorAll("button");
const choices = ["Rock", "Paper", "Scissor"];
const resetbtn = document.getElementById("resetbtn");
let playerScore =  0;
let computerScore = 0;

computerScoreView.innerHTML = 0;
playerScoreView.innerHTML = 0;

//ResetGame Function
function resetGame(){
   computerScore = 0;
   playerScore = 0;
   btns.forEach((btn) => {
     btn.disabled = false;
   })
   player.innerHTML = "";
   com.innerHTML = "";
   result.innerHTML = "";
   computerScoreView.innerHTML = 0;
   playerScoreView.innerHTML = 0;
   resetbtn.disabled = true;
 }
//Disable Button
function disableBtn(){
         btns.forEach((btn)=>{
           btn.disabled = true;
         })
          resetbtn.disabled = false;
       }

btns.forEach((btn) => {
     btn.addEventListener("click", (e)=>{
       
       //Player Choice
       playerchoice = e.target.id;
       player.innerHTML = e.target.id;
       
       //Computer Choice
       let choice =  Math.floor(Math.random()*3);
       const comchoice = choices[choice];  
       com.innerHTML = comchoice;
         
       //condition
       if(playerchoice === "Rock" && comchoice === "Scissor" ||
          playerchoice === "Paper" && comchoice === "Rock" ||
          playerchoice === "Scissor" && comchoice === "Paper")
          {
           playerScore++;
           playerScoreView.innerHTML = playerScore;
          }
        else if(playerchoice === comchoice){
          
        }
       else{
           computerScore++;
           computerScoreView.innerHTML = computerScore;
       }
       //check for winner
      if(playerScore >= 3 ){
        result.innerHTML = "Player Wins!";
        disableBtn();
        }
      else if(computerScore >= 3){
        result.innerHTML = "Computer Wins!";
        disableBtn();
    }

   });
   
});