const rps = (p1, p2) => {
  
  if(p1 == p2){
​
    return "Draw!";
  }
  else{
    
  switch(p1){
      case "scissors":
        if(p2 == "paper"){
          return "Player 1 won!";
          break;
        }
      
        else { return "Player 2 won!";break;}
      case "paper":
        if(p2 == "rock"){
          return "Player 1 won!";
          break;
        }
      
        else { return "Player 2 won!";break;}
      case "rock":
        if(p2 == "scissors"){
          return "Player 1 won!";
          break;
        }
      
        else { return "Player 2 won!";break;}
      
  }
  
  
  }
};