let humanscore=0;
    let computerscore=0;

function getComputerChoice(number){
    let random=Math.random()*3;
    removerem=random-(random%1);

    if(removerem==0)
        {
            return "ROCK";
        }
    else if(removerem==1)
        {
            return "PAPER";
        }
    
    else{
        return "SCISSORS";
    }


}

function GethumanChoice(){
   let value= prompt("Rock Papers or Scissors ?");
   capitalval=value.toUpperCase();
   return capitalval;
}

function playround(humanchoice,computerchoice)
{

    if(humanchoice==computerchoice)
        {
            humanscore++;
            console.log("You win this round");
        }
        else{
            computerscore++;
            console.log("You Lose");
            
        }

}
function playGame()
{
    

    for (let i=0;i<5;i++)
        {
            const humanvalue=GethumanChoice();
            const computervalue=getComputerChoice();
            console.log("YOU CHOSE -"+humanvalue);
            console.log("COMPUTER CHOSE -"+computervalue);
            playround(humanvalue,computervalue);
            // return("your score for this round - "+humanscore);
            // return("The computer's score for this round -",computerscore);
        }
        console.log("Your total score-  ",humanscore,);
        console.log("The computer's final score -  ",computerscore);
}





//  const humanvalue=GethumanChoice();
// const computervalue=getComputerChoice();

//  console.log(humanvalue);
// console.log(computervalue);
// // let humanscore=0;
// // let computerscore=0;
// playround(humanvalue,computervalue);
// console.log(humanscore,"your score");
// console.log(computerscore,"Computerscore")
playGame();

