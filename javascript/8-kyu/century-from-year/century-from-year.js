function century(year) {
  
  const divided = year/100;
  if (year % 100 == 0){
    return divided;
  }
  else{
​
    return Math.floor(divided)+1;
  }
  
​
  
  return;
}