function getCount(str) {
  
  const number = str.length;
  let count =0;
  for(var i =0;i<number;i++){
    if ((str[i]=='a') || (str[i]=='e')|| ( str[i]=='i') || (str[i] == 'o') || (str[i]=='u') )
    {
        count+=1;
        }
    else{
      count = count;
    }
  }
  
  return count;
  
  
  
  
}