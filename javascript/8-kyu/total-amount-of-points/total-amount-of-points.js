function points(games) {
  const newstr =games.join("");
  let totalX = 0;
  let totalY = 0;
  for(let i = 0;i<newstr.length;i+=3){
    const x = newstr[i];
    const y = newstr[i+2];
    if (x>y){
      totalX +=3;
    }
    else if (x == y){
      totalX += 1;
    }
    else{}
    
    
    
  }
​
  return totalX;
  
  
  
}