let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#USer-score");
const compScorePara = document.querySelector("#comp-score");
const restbtn=document.querySelector("#Restbtn");


restbtn.addEventListener("click",(e)=>{
    userScore=0;
    compScore=0;
    userScorePara.textContent= userScore;
    compScorePara.textContent= compScore;
    msg.textContent="play your move";
    msg.style.backgroundColor="#081b31";
});

const genCompChoices = ()=>{
    const options=["Rock","Paper","Scissors"];
    // rock ,paper,scissors
   const randomIndex= Math.floor(Math.random ()*3);
   return options[randomIndex];

}

const drawGame = ()=>{
    
    msg.textContent="Draw Game";
    msg.style.backgroundColor="#081b31";
}

showWinner = (userWin,userChoice,compChoice)=>{
   if(userWin){
      
      msg.textContent=`You Won! your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";
      userScore++;
      userScorePara.textContent= userScore;
   }
   else{
       
       msg.textContent=`You Lost  ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor="red";
       compScore++;
       compScorePara.textContent= compScore;
   }
}




const playGame=(userChoice)=>{
   
    //Generate computer choices
    const compChoice=genCompChoices();
  

    if(userChoice===compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice==="Rock"){
            //scissors,paper
            userWin= compChoice==="Paper"? false: true;
        }
        else if(userChoice=="Paper"){
            //rock,scissors
            userWin= compChoice==="Scissors"? false: true;
        }
        else{
            //rock,scissors
            userWin= compChoice==="Rock"? false: true;
        }
      showWinner(userWin,userChoice,compChoice);
}

};

choices.forEach((choice)=>{
    
    choice.addEventListener("click",(e)=>{
        const userChoice=choice.getAttribute("id");
    console.log("choice was clicked "+userChoice);
        
    playGame(userChoice);
    })
})